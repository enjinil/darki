import { build } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extScripts = [
  {
    entry: path.resolve(__dirname, "./src/js/main.js"),
    fileName: "main",
  },
  {
    entry: path.resolve(__dirname, "./src/scss/darki.scss"),
    fileName: "darki",
  },
];

extScripts.forEach(async (scr) => {
  await build({
    publicDir: false,
    build: {
      sourcemap: false,
      minify: "terser",
      outDir: "./dist-assets",
      lib: {
        ...scr,
        formats: ["es"],
      },
      emptyOutDir: false,
      rollupOptions: {
        output: {
          assetFileNames: `${scr.fileName}.[ext]`,
        },
      },
    },
    configFile: false,
  });
});
