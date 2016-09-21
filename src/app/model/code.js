import Ajax from 'simple-ajax';

const validate = (codeString, callback) => {
  const ajaxRequest = new Ajax({
    url: 'http://localhost:3000/validate',
    method: 'POST',
    data: JSON.stringify({ codeString }),
  });

  ajaxRequest.on('success', (event) => {
    callback(event);
  });

  ajaxRequest.send();
};

module.exports = {
  validate,
};
