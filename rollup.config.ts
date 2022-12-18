import typescript from "@rollup/plugin-typescript";
import jsx from "acorn-jsx";
import { RollupOptions } from "rollup";
import sass from "rollup-plugin-sass";

type AcornInjectPlugins = ReturnType<typeof jsx>;

declare module "rollup" {
	interface RollupOptions {
		acornInjectPlugins?: AcornInjectPlugins[];
	}
}

const options: RollupOptions = {
	input: "src/index.tsx",
	output: [
		{
			format: "esm",
			strict: false,
			exports: "named",
			file: "build/index.js",
		},
	],
	acornInjectPlugins: [jsx()],
	plugins: [
		// @ts-ignore
		sass({
			output: "build/index.css",
			options: {
				outputStyle: "compressed",
			},
		}),
		typescript({
			tsconfig: "./tsconfig.rollup.json",
		}),
	],
	external: ["react", "react-dom", "@oly_op/bem"],
};

export default options;
