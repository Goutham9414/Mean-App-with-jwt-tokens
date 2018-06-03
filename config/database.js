
// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url: "mongodb://localhost/test" + this.db,
    secret: crypto,
    db: "mean-angular-2"
}