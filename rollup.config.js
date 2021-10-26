import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import ttypescript from "ttypescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");
const rollUpConfig = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true, typescript: ttypescript }),
      image(),
    ],
  },
  {
    input: "./types/index.d.ts",
    output: [
      {
        format: "es",
        file: `dist/index.d.ts`,
      },
    ],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];

export default rollUpConfig;
