module.exports = (condition, errorType = Error, message = '') => {
  const errorMessage = typeof errorType === 'string' ? errorType : message;
  const ErrorClass = typeof errorType === 'string' ? Error : errorType;
  if (condition) {
    throw new ErrorClass(errorMessage);
  }
};
