const validator = require('./optionValidator');
const envChecker = require('./environmentChecker');

module.exports = (api, opts, env) => {
    const { isProduction, isDevelopment, isTest } = envChecker(env);

    return {
        presets: [],
        plugins: []
    };
};
