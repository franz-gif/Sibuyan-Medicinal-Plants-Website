
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['qVSd6ZyFyeywKcPzTVhc4G'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  