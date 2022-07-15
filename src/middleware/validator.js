const validator = (req, res, next) => {
    if (req.method, req.url, req.query) {
        next();
    } else {
        throw new Error("Attention!: name not found.");
    }
};

module.exports = {
    validator,
};
