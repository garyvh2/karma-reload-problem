module.exports = function babelConfig(api) {
  api.cache(true);

  const presets = [
    /**
     * Babel preset environment
     * - modules: false, this assure that the ESModules won't be transpiled so webpack can
     *  perform the treeshaking optimizations correctly
     */
    ['@babel/preset-env', {
      modules: false
    }]];
  const plugins = [
    /**
       * Compile ES2015 classes to ES5
       */
    '@babel/plugin-transform-classes'
  ];

  return {
    presets,
    plugins,
  };
};
