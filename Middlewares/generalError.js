const generalError = (req, res, next) => {
  next({ status: 404, message: 'Not Found' });
};

export default generalError;