const withTM = require("next-transpile-modules")(["ui", "companies"]);

module.exports = withTM({
  reactStrictMode: true,
});
