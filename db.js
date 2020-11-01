const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/doggyapp"
);

module.exports.registerUser = (first, last, email, password) => {
    return db.query(
        `
    INSERT INTO users (first, last, email, password)
    VALUES ($1, $2, $3, $4) RETURNING id `,
        [first, last, email, password]
    );
};
module.exports.getUser = (userId) => {
    return db.query(
        `SELECT * FROM users 
    WHERE id = ($1)
    `,
        [userId]
    );
};
module.exports.getLogin = (email) => {
    return db.query(
        `
        SELECT * FROM users 
        WHERE email = ($1)`,
        [email]
    );
};
module.exports.updateImage = (imageUrl, userId) => {
    return db.query(
        `UPDATE users
    SET imageUrl = ($1)
    WHERE id = ($2) RETURNING *
    `,
        [imageUrl, userId]
    );
};
module.exports.addDogInfo = (name, gender, size, bio, imageurl, userId) => {
    return db.query(
        `
    INSERT INTO doggy (name, gender, size, bio, imageUrl, firstuserid)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING * `,
        [
            name || null,
            gender || null,
            size || null,
            bio || null,
            imageurl || null,
            userId,
        ]
    );
};
module.exports.getDogInfo = (userId) => {
    return db.query(
        `SELECT * FROM doggy 
    WHERE firstuserid = ($1)
    `,
        [userId]
    );
};
module.exports.updateDogInfo = (
    dogId,
    name,
    gender,
    size,
    bio,
    imageurl,
    userId
) => {
    return db.query(
        `INSERT INTO doggy (id, name, gender, size, bio, imageurl, firstuserid)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (id)
    DO UPDATE SET name = ($2), gender = ($3), size = ($4), bio = ($5), imageurl = ($6), firstuserid = ($7) RETURNING * `,
        [dogId, name, gender, size, bio, imageurl, userId]
    );
};

module.exports.getTricks = () => {
    return db.query(
        `
        SELECT * FROM tricks`
    );
};
module.exports.getTrick = (trickId) => {
    return db.query(
        `SELECT * FROM tricks 
    WHERE id = ($1)
    `,
        [trickId]
    );
};
module.exports.getQuotes = () => {
    return db.query(
        `
        SELECT * FROM quotes`
    );
};
module.exports.getWalks = (userId) => {
    return db.query(
        `
        SELECT * FROM walks
        WHERE user_id = ($1)`,
        [userId]
    );
};
