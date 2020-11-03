const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8080" });
const compression = require("compression");
const db = require("./db.js");
const bc = require("./bc.js");
// const { sendEmail } = require("./ses");
const path = require("path");
// const { hash } = require("bcryptjs");
const cookieSession = require("cookie-session");
const cryptoRandomString = require("crypto-random-string");
const csurf = require("csurf");
const { s3Url } = require("./config.json");
const uidSafe = require("uid-safe");
const s3 = require("./s3.js");
const multer = require("multer");
//const { brotliDecompress } = require("zlib");

app.use(compression());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//////////////////////////////////////////////////////////////////////////////////////
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

app.use(csurf());

app.use(function (req, res, next) {
    //console.log("token : ", req.csrfToken());
    res.cookie("mytoken", req.csrfToken());
    next();
});
//////////////No changes here ////////////////////////////////////
const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152,
    },
});
////////////////////////////////////////////////////////////////////

app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.post("/registration", (req, res) => {
    //console.log("req.body :", req.body);
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    let cd = req.body.cd;
    //console.log("first, last ...", first, last, email, cd);
    let password = req.body.password;
    //console.log("password", password);
    bc.hash(password)
        .then((result) => {
            req.body.password = result;
            password = req.body.password;
            //console.log("password", password);
            db.getLogin(email)
                .then((result) => {
                    //console.log("result", result);
                    if (result.rows[0] && result.rows[0].id) {
                        //console.log("result", result);
                        console.log(
                            "Somebody already registered with this email"
                        );
                        res.json({
                            error: "Please try again",
                        });
                    } else {
                        if (
                            first === "" ||
                            last === "" ||
                            email === "" ||
                            password === ""
                        ) {
                            console.log(
                                "Not logging the registration data / empty"
                            );
                            res.json({
                                error: "Please try again",
                            });
                        } else {
                            // I need to generate a random code right here
                            if (cd == "") {
                                cd = cryptoRandomString({ length: 6 });
                                console.log("cd :", cd);
                            }
                            db.registerUser(first, last, email, password, cd)
                                .then((result) => {
                                    var userId = result.rows[0].id;
                                    //console.log("userid", userid);
                                    req.session.userId = userId;
                                    res.json({
                                        userId,
                                    });
                                })
                                .catch((err) => {
                                    console.log(
                                        "trouble with inserting registerUser data",
                                        err
                                    );
                                    res.json({
                                        error: "Please try again",
                                    });
                                });
                        }
                    }
                })
                .catch((err) => {
                    console.log(
                        "err in checking if email already registered in Registration",
                        err
                    );
                    res.json({
                        error: "Please try again",
                    });
                });
        })
        .catch((err) => {
            console.log("hash() didn't work", err);
            res.json({
                error: "Please try again",
            });
        });
});
app.post("/welcome", (req, res) => {
    // console.log("req.body :", req.body);
    var email = req.body.email;
    var password = req.body.password;
    //console.log(" email and password", email, password);
    db.getLogin(email)
        .then((result) => {
            if (result) {
                console.log("result", result);
                var userId = result.rows[0].id;
                let pass = result.rows[0].password;
                // console.log("pass   ", pass);
                // console.log("password   ", password);
                bc.compare(password, pass)
                    .then((info) => {
                        console.log("info from compare", info);
                        if (info) {
                            //console.log("userId from here and now: ", userId);
                            req.session.userId = userId;
                            return res.json({
                                success: info,
                                userId: req.session.userId,
                            });
                        } else {
                            return res.json({
                                error: "Please try again",
                            });
                        }
                    })
                    .catch((err) => {
                        console.log("err in compare login", err);
                        return res.json({
                            error: "Please try again",
                        });
                    });
            }
            return;
        })
        .catch((err) => {
            console.log("err in getLogin", err);
            return res.json({
                error: "Please try again",
            });
        });
});
app.get("/user", (req, res) => {
    // console.log("req.session.userId", req.session.userId);
    if (req.session.userId) {
        let userId = req.session.userId;
        // console.log("userId from /user ", userId);
        db.getUser(userId)
            .then((info) => {
                var list = info.rows;
                // console.log("my list here   :", list);
                return res.json({
                    userId: list[0].id,
                    first: list[0].first,
                    last: list[0].last,
                    imageUrl: list[0].imageurl,
                    email: list[0].email,
                    cd: list[0].cd,
                });
            })
            .catch((err) => {
                console.log("err in getUser index.js", err);
            });
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.get("/otherusers", (req, res) => {
    if (req.session.userId) {
        let userId = req.session.userId;

        db.getCd(userId)
            .then((data) => {
                var cd = data.rows[0].cd;
                console.log(
                    "cd after I fetch it from users table /otherusers",
                    cd
                );
                db.getOtherUsers(cd, userId)
                    .then((info) => {
                        var list = info.rows;
                        console.log(
                            "my list here after getting /otherusers  :",
                            list
                        );
                        return res.json({
                            list,
                        });
                    })
                    .catch((err) => {
                        console.log("err in getOtherUsers index.js", err);
                    });
            })
            .catch((err) => {
                console.log("err in getCd index.js", err);
            });
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.post("/uploadimg", uploader.single("file"), s3.upload, (req, res) => {
    let userId = req.session.userId;
    let filename = req.file.filename;
    const url = `${s3Url}${filename}`;
    db.updateImage(url, userId)
        .then((info) => {
            // console.log("info after updateImage : ", info.rows[0].imageurl);
            return res.json({
                imageUrl: info.rows[0].imageurl,
                success: "success",
            });
        })
        .catch((err) => {
            console.log("trouble with updating /uploadimg", err);
        });
});
app.post("/uploaddogbio", uploader.single("file"), s3.upload, (req, res) => {
    //console.log("I am getting an /uploaddogbio req");
    console.log("req.body from /uploaddogbio :", req.body);
    let userId = req.session.userId;
    let filen = req.file.filename;
    const imageurl = `${s3Url}${filen}`;
    db.addDogInfo(
        req.body.name,
        req.body.gender,
        req.body.size,
        req.body.bio,
        req.body.cd,
        imageurl,
        userId
    )
        .then(({ rows }) => {
            console.log(" rows[0] from addDogInfo in index.js: ", rows[0]);
            res.json({
                dog: rows[0],
            });
        })
        .catch((err) => {
            console.log("err n addDogInfo index.js", err);
        });
});
app.post("/updatedogbio", uploader.single("file"), s3.upload, (req, res) => {
    //console.log("I am getting an /uploaddogbio req");
    console.log("req.body from /uploaddogbio :", req.body);
    //let userId = req.session.userId;
    let filen = req.file.filename;
    const imageurl = `${s3Url}${filen}`;
    db.updateDogInfo(
        req.body.dogId,
        req.body.name,
        req.body.gender,
        req.body.size,
        req.body.bio,
        req.body.cd,
        imageurl
    )
        .then(({ rows }) => {
            console.log(" rows[0] from addDogInfo in index.js: ", rows[0]);
            res.json({
                dog: rows[0],
            });
        })
        .catch((err) => {
            console.log("err n updateDogInfo index.js", err);
        });
});

app.get("/doginfo", (req, res) => {
    // console.log("req.session.userId", req.session.userId);
    if (req.session.userId) {
        let userId = req.session.userId;
        console.log("userId from /user ", userId);
        db.getCd(userId)
            .then((data) => {
                var cd = data.rows[0].cd;
                console.log(
                    "cd after I fetch it from users table /doginfo",
                    cd
                );
                db.getDogInfo(cd)
                    .then((info) => {
                        var list = info.rows;
                        console.log("list[0] from /dogifo ", list[0]);
                        return res.json({
                            id: list[0].id,
                            name: list[0].name,
                            gender: list[0].gender,
                            size: list[0].size,
                            dogimg: list[0].imageurl,
                            bio: list[0].bio,
                            cd: list[0].cd,
                            firstuserid: list[0].firstuserid,
                            seconduserid: list[0].seconduserid,
                        });
                    })
                    .catch((err) => {
                        console.log("err in getDogInfo index.js", err);
                    });
            })
            .catch((err) => {
                console.log("err in getCd index.js", err);
            });
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.get("/api/tricks", async (req, res) => {
    //console.log("I am getting a req in /tricks");
    try {
        //var userId = req.session.userId;
        var tricks = [];
        const { rows } = await db.getTricks();
        tricks = rows;
        //console.log("tricks from get /api/tricks", tricks);
        res.json({
            tricks: tricks,
        });
    } catch (err) {
        console.log("err in getTricks get /tricks"), err;
    }
});

app.get("/api/walks", async (req, res) => {
    //console.log("I am getting a req in /walks");
    try {
        var userId = req.session.userId;
        var walks = [];
        const { rows } = await db.getWalks(userId);
        walks = rows;
        console.log("walks from get /api/walks", walks);
        res.json({
            walks: walks,
        });
    } catch (err) {
        console.log("err in getWalks"), err;
    }
});

app.get("/trick/:id.json", (req, res) => {
    const trickId = req.params.id;
    if (trickId) {
        db.getTrick(trickId)
            .then((info) => {
                var trick = info.rows[0];
                console.log("my trick in server  :", trick);
                return res.json({
                    trick,
                });
            })
            .catch((err) => {
                console.log("err in getTrick index.js", err);
                return res.json({
                    error: "Please try again",
                });
            });
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.get("/api/quotes", async (req, res) => {
    //console.log("I am getting a req in /tricks");
    try {
        //var userId = req.session.userId;
        var quotes = [];
        const { rows } = await db.getQuotes();
        quotes = rows;
        //console.log("quotes from get /api/quotes", quotes);
        res.json({
            quotes: quotes,
        });
    } catch (err) {
        console.log("err in getTricks get /tricks"), err;
    }
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

app.get("*", function (req, res) {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
/////////////////////////////////////////////////////////////////////

app.listen(8080, function () {
    console.log("server is listening...");
});
//////////////////////////////////////////////////////////////////////
