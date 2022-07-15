const data = (req, res) => {
    res.status(200).send({
        name: "Danny",
        role: "Student",
    });
};

module.exports = {
    data,
};
