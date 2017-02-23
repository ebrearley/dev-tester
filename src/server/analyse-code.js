import requireFromString from 'require-from-string';

const prefix = 'Eric';
const suffix = ' is awesome!';

module.exports = (code, callback) => {
  try {
    const module = requireFromString(code);

    const moduleCallback = (concatenatedString) => {
      if (concatenatedString === 'Eric is awesome!') {
        callback({
          success: true,
          message: `Wow you did it! ${prefix} ${suffix}`,
        });
      }
    };

    module.concatenate(prefix, suffix, moduleCallback);
  } catch (exception) {
    callback({
      success: false,
      message: 'Nope not quite there, try again.',
    });
  }
};
