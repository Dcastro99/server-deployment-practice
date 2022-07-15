const pageError = (req, res, next) => {
    res.status(404).send("cannot be found");
};

module.exports = {
    pageError,
};
