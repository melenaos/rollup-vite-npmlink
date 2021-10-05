import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
// import commonjs from '@rollup/plugin-commonjs';
// import pluginJson from '@rollup/plugin-json';
import bundleSize from "rollup-plugin-bundle-size";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";
// https://dev.to/shubhadip/vue-3-component-library-270p
// https://github.com/shubhadip/vue3-component-library/blob/master/rollup.config.js
export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      sourcemap: true,
    },
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      moduleDirectories: ["node_modules"],
    }),
    typescript(),
    vue({ preprocessStyles: true, compileTemplate: true }),
    postcss(),
    // pluginJson(),
    bundleSize(),
    // commonjs(),
  ],
  // indicate which modules should be treated as external
  external: [
    "vue",
    "vue-router",
    "@melenaos/vue-codyhouse",
    "@melenaos/vue-common",
    "axios",
  ],
};
