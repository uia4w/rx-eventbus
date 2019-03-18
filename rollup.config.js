const definition = require("./package.json");
const dependencies = Object.keys(definition.dependencies || {});

export default {
  input: "index",
  plugins: [],
  external: dependencies,
  output: {
    extend: true,
    file: `dist/${definition.name}.js`,
    format: "umd",
    globals: {
    },
    //globals: dependencies.reduce((p, v) => (p[v] = "pie", p), {}),
    name: "rxeb"
  }
};
