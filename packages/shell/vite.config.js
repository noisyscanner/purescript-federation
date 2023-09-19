import federation from "@originjs/vite-plugin-federation";
export default {
  preview: {
    port: 6003,
  },
  plugins: [
    federation({
      name: "shell",
      remotes: {
        app1: "http://localhost:6001/assets/remoteEntry-app1.js",
        app2: "http://localhost:6002/assets/remoteEntry-app2.js",
      },
    }),
  ],
};
