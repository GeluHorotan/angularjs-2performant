const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());
// Proxy configuration
const apiProxy = createProxyMiddleware({
  target: "https://api.2performant.com",
  changeOrigin: true,
  pathRewrite: {
    "^/api/": "/", // Remove the "/api/" prefix when forwarding the request
  },
  onError: (err, req, res) => {
    console.error("Proxy Error:", err);
    res.status(500).send("Proxy Error");
  },
});

app.use("/api", apiProxy);

// Serve the Angular app
app.use(express.static("app"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
