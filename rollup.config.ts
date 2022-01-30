import jsx from "acorn-jsx"
import sass from "rollup-plugin-sass"
import { RollupOptions } from "rollup"
import typescript from "@rollup/plugin-typescript"

const options: RollupOptions = {
	input: "src/index.tsx",
	output: [{
		format: "cjs",
		strict: false,
		exports: "named",
		file: "build/index.js",
	}],
	acornInjectPlugins: [
		// @ts-ignore
		jsx(),
	],
	plugins: [
		sass({
			output: "build/index.css",
		}),
		typescript({
			tsconfig: "./tsconfig.rollup.json",
		}),
	],
	external: [
		"react",
		"react-dom",
	],
}

export default options