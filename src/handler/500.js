const serverError = (req, res, next) => {
    console.error(err.stack);
    res.status(500).send("it's broken!");
};

module.exports = {
    serverError,
};
