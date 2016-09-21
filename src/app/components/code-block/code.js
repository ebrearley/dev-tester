module.exports = `

var getAwesomeGuy = function(prefix, suffix, callback) {
  callback(prefix + suffix);
}

module.exports = { concatinate: getAwesomeGuy };
`;
