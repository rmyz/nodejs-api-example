const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(`Server up and running on http://localhost:${app.get("port")}`);
});
