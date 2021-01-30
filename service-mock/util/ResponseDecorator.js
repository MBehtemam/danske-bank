const ResponseDecorator = (code, success, message, data = null) => ({
  code,
  success,
  message,
  data,
});

module.exports = ResponseDecorator;
