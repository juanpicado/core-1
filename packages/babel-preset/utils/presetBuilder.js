module.exports = (api, opts, env) => {
    const envPreset = [
        require('babel-preset-env'),
        {
            ...(isTest && {}),
            ...(isDevelopment && {}),
            ...(isProduction && {})
        }
    ];

    const flowPreset = [
        require('babel-preset-flow'),
        {
            ...(isTest && {}),
            ...(isDevelopment && {}),
            ...(isProduction && {})
        }
    ];

    const reactPreset = [
        require('babel-preset-react'),
        {
            ...(isTest && {}),
            ...(isDevelopment && {}),
            ...(isProduction && {})
        }
    ];

    const stage3Preset = [
        require('babel-preset-stage-3'),
        {
            ...(isTest && {}),
            ...(isDevelopment && {}),
            ...(isProduction && {})
        }
    ];

    const stage2Preset = [
        require('babel-preset-stage-2'),
        {
            ...(isTest && {}),
            ...(isDevelopment && {}),
            ...(isProduction && {})
        }
    ];

    return {
        presets: [
            isReactEnabled && reactPreset,
            envPreset,
            isStage3Enabled && stage3Preset,
            isStage2Enabled && stage2Preset,
            isFlowEnabled && flowPreset
        ]
    };
};
