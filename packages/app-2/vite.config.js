import federation from "@originjs/vite-plugin-federation";
export default {
  preview: {
    port: 6002,
  },
  plugins: [
    federation({
      name: "app-1",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./app": "./main-remote.js",
      },
      shared: {
        Effect: {
          packagePath: "./output/Effect/index.js",
        },
      },
    }),
  ],
};
