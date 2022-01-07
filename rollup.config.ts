import sass from "rollup-plugin-sass"
import { RollupOptions } from "rollup"
import typescript from "rollup-plugin-typescript2"

const options: RollupOptions = {
	input: "src/index.tsx",
	output: [{
		format: "cjs",
		strict: false,
		exports: "named",
		file: "build/index.js",
	}],
	plugins: [
		sass({
			output: "build/index.css",
		}),
		typescript(),
	],
	external: [
		"react",
		"react-dom",
	],
}

export default options