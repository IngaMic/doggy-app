const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/doggyapp"
);

module.exports.registerUser = (first, last, email, password, cd) => {
    return db.query(
        `
    INSERT INTO users (first, last, email, password, cd)
    VALUES ($1, $2, $3, $4, $5) RETURNING id `,
        [first, last, email, password, cd]
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
module.exports.addDogInfo = (name, gender, size, bio, cd, imageurl, userId) => {
    return db.query(
        `
    INSERT INTO doggy (name, gender, size, bio, cd, imageUrl, firstuserid)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * `,
        [
            name || null,
            gender || null,
            size || null,
            bio || null,
            cd,
            imageurl || null,
            userId,
        ]
    );
};
module.exports.getCd = (userId) => {
    return db.query(
        `SELECT cd FROM users 
    WHERE id = ($1)
    `,
        [userId]
    );
};
module.exports.getOtherUsers = (cd, userId) => {
    return db.query(
        `SELECT * FROM users 
    WHERE cd = ($1)
    AND id <> ($2)
    `,
        [cd, userId]
    );
};
module.exports.getUsersByIds = (arr, cd) => {
    return db.query(
        `SELECT id, first, cd
        FROM users WHERE id = ANY($1)
        AND cd = ($2)`,
        [arr, cd]
    );
};
module.exports.getDogInfo = (cd) => {
    return db.query(
        `SELECT * FROM doggy 
    WHERE cd = ($1)
    `,
        [cd]
    );
};
module.exports.updateDogInfo = (
    dogId,
    name,
    gender,
    size,
    bio,
    cd,
    imageurl
) => {
    return db.query(
        `INSERT INTO doggy (id, name, gender, size, bio, cd, imageurl)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (id)
    DO UPDATE SET name = ($2), gender = ($3), size = ($4), bio = ($5), cd = ($6), imageurl  = ($7) RETURNING * `,
        [dogId, name, gender, size, bio, cd, imageurl]
    );
};
module.exports.updateQuestionaire = (cd, training, characters, hero) => {
    return db.query(
        `INSERT INTO questionaire (cd, training, characters, hero)
         VALUES($1, $2, $3, $4) RETURNING * `,
        [cd, training, characters, hero]
    );
};
module.exports.getQuestionaire = (cd) => {
    return db.query(
        `SELECT * FROM questionaire 
    WHERE cd = ($1)
    `,
        [cd]
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
         JOIN trickssteps
         ON tricks.id = trickssteps.trick_id
         WHERE tricks.id = ($1)
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
module.exports.getWalks = (cd) => {
    return db.query(
        `
        SELECT * FROM walks
        WHERE cd = ($1)
        ORDER BY walks.created_at DESC`,
        [cd]
    );
};
module.exports.getLogs = (cd) => {
    return db.query(
        `SET timezone=UTC;

        SELECT TO_CHAR(created_at, 'Dy Mon DD YYYY HH24:MI:SS ') created_at
         FROM walks
        WHERE cd = ($1)
        `,
        [cd]
    );
};
module.exports.newlog = (activity, time, cd, logUserId) => {
    return db.query(
        `
    INSERT INTO walks (activity, mins, cd, user_id)
    VALUES ($1, $2, $3, $4) RETURNING * `,
        [activity, time, cd, logUserId]
    );
};