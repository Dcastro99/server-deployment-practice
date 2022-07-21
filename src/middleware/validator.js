const validator = (req, res, next) => {
  if (req.params['name']) {
    next();
  } else {
    throw new Error('Attention!: name not found.');
  }
};

module.exports = {
  validator,
};
