import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,               // generate .d.ts
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"], // don't bundle react
});
