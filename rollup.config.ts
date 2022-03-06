import jsx from "acorn-jsx"
import sass from "rollup-plugin-sass"
import { RollupOptions } from "rollup"
import typescript from "@rollup/plugin-typescript"

type Parser =
	Parameters<ReturnType<typeof jsx>>[0]

declare module "rollup" {
	interface RollupOptions {
		acornInjectPlugins?: ((BaseParser: Parser) => Parser)[],
	}
}

const options: RollupOptions = {
	input: "src/index.tsx",
	output: [{
		format: "cjs",
		strict: false,
		exports: "named",
		file: "build/index.js",
	}],
	acornInjectPlugins: [
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