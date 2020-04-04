const Redis = require("ioredis");
const redis = new Redis(); // uses defaults unless given configuration object
function setCountWords(count) {
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
    redis.get("countWords").then(function (result) {
        console.log(result);
        redis.quit();
    });
}
function getSourceText() {
    redis.get("sourceText").then(function (result) {
        console.log(result);
        redis.quit();
    });
}
function getPolindrom() {
    redis.get("polindrom").then(function (result) {
        console.log(result);
        redis.quit();
    });
}
module.exports = { redis, setCountWords, setSourceText, setPolindrom, getCountWords, getSourceText, getPolindrom };
