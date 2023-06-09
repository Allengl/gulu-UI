import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import dartSass from "sass";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/library/index.ts",
  output: [
    {
      globals: {
        vue: "Vue",
      },
      name: "gulu-UI",
      file: "dist/library/gulu-ui.js",
      format: "umd",
      plugins: [terser()],
    },
    {
      name: "gulu-UI",
      file: "dist/library/gulu-ui.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [
    vue({
      include: /\.vue$/,
    }),
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
  ],
};
