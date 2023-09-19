import federation from "@originjs/vite-plugin-federation";
import glob from "fast-glob";

const Halogen = await glob("./output/Halogen**/index.js");

export default {
  preview: {
    port: 6002,
  },
  plugins: [
    federation({
      name: "app-2",
      filename: "remoteEntry-app2.js",
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
