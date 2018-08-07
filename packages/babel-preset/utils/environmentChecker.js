const ENVS = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    TEST: 'test',
};

module.exports = (env) => {
    const isProduction = env === ENVS.PRODUCTION;
    const isDevelopment = env === ENVS.DEVELOPMENT;
    const isTest = env === ENVS.TEST;
    if (!env || (!isProduction && !isDevelopment && !isTest)) {
        const availableEnvs = Object.values(ENVS).reduce(
            (acc, item) => `${acc}, ${JSON.stringify(item)}`
        );
        throw new Error(
            `@verdaccio preset: available environments are ${availableEnvs} but provided ${JSON.stringify(env)}`
        );
    }

    return {
        production: env === PRODUCTION
    };
}
