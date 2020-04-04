const Redis = require("ioredis");
// const redis = new Redis(); // uses defaults unless given configuration object
function setCountWords(count) {
    const redis = new Redis(); // uses defaults unless given configuration object
    // redis.multi({ pipeline: false });
    redis.pipeline()
        .set("countWords", count)
        .exec(function (err, result) {
            if (err) {
                console.log('error');
            } else if (result) {
                redis.quit();
            }
        });
}
function setSourceText(sourceText) {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.pipeline()
        .set("sourceText", sourceText)
        .exec(function (err, result) {
            if (err) {
                console.log('error');
            } else if (result) {
                redis.quit();
            }
        });
}
function setPolindrom(polindrom) {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.pipeline()
        .set("polindrom", polindrom)
        .exec(function (err, result) {
            if (err) {
                console.log('error');
            } else if (result) {
                redis.quit();
            }
        });
}

function getCountWords() {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.get("countWords").then(function (result) {
        console.log(result);
        redis.quit();
    });
}
function getSourceText() {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.get("sourceText").then(function (result) {
        console.log(result);
        redis.quit();
    });
}
function getPolindrom() {
    const redis = new Redis(); // uses defaults unless given configuration object
    redis.get("polindrom").then(function (result) {
        console.log(result);
        redis.quit();
    });
}
module.exports = { setCountWords, setSourceText, setPolindrom, getCountWords, getSourceText, getPolindrom };
