/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/extensions */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
};
