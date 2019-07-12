const proxy = [
  {
    context: "/api",
    target: "http://localhost:60218"
    // pathRewrite: { "^/api": "" }
  }
];
module.exports = proxy;
