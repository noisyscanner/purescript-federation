import federation from "@originjs/vite-plugin-federation";
import glob from "fast-glob";

const Halogen = await glob("./output/Halogen**/index.js");

export default {
  preview: {
    port: 6001,
  },
  plugins: [
    federation({
      name: "app-1",
      filename: "remoteEntry-app1.js",
      // Modules to expose
      exposes: {
        "./app": "./main-remote.js",
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          Halogen,
        },
      },
    },
  },
};
