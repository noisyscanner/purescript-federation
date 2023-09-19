import federation from "@originjs/vite-plugin-federation";
export default {
    plugins: [
        federation({
            name: 'shell',
            remotes: {
                app1: "http://localhost:6001/assets/remoteEntry.js",
                app2: "http://localhost:6002/assets/remoteEntry.js",
            },
            // shared: ['vue']
        })
    ]
}
