import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import path from "path";
import copy from "rollup-plugin-copy";
import image from "@rollup/plugin-image";
import includePaths from "rollup-plugin-includepaths";
import autoprefixer from "autoprefixer";
import ttypescript from "ttypescript";
import dts from "rollup-plugin-dts";

const postcssUrl = require("postcss-url");

const packageJson = require("./package.json");
const rollUpConfig = [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ useTsconfigDeclarationDir: true, typescript: ttypescript }),
			postcss({
				// compile css/scss
				minimize: true,
				sourceMap: false,
				to: "./dist/css/style.css",
				autoModules: true,
				extract: "css/style.css",
				extensions: [".css", ".scss"],
				use: [
					[
						"sass",
						{
							includePaths: [path.resolve("node_modules")]
						}
					]
				],
				plugins: [
					postcssUrl({
						url: "copy",
						basePath: path.resolve(__dirname, "src/assets"),
						useHash: false
					}),
					autoprefixer
				]
			}),
			includePaths({
				paths: ["src"],
				extensions: [".svg"]
			}),
			image(),
			copy({
				targets: [
					{ src: "src/assets", dest: "dist" },
					{ src: "scripts/releases", dest: "dist" }
				]
			})
		]
	},
	{
		input: "./types/index.d.ts",
		output: [
			{
				format: "es",
				file: `dist/index.d.ts`
			}
		],
		external: [/\.scss$/],
		plugins: [dts()]
	}
];

export default rollUpConfig;
