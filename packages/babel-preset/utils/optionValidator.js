const optionValidator = (name, value, type, defaultValue) => {
    if (typeof value !== type) {
        throw new Error(
            `@verdaccio preset: ${value} provided doesn't match ${type} for ${name}`
        );
    }

    return value || defaultValue;
};

module.exports = optionValidator;
