import sass from "rollup-plugin-sass"
import typescript from "rollup-plugin-typescript2"

import pkg from "./package.json"

export default {
  input: "src/index.tsx",
  output: [{
    format: "cjs",
    strict: false,
    file: pkg.main,
    exports: "named",
  }],
  plugins: [
    sass({ insert: true }),
    typescript(),
  ],
  external: [
    "react",
    "react-dom",
  ]
}