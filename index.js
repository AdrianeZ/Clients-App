const express = require("express");
const hbs = require("express-handlebars");

const clientRouter = require("./routes/clients");

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static("public"));
app.engine(".hbs", hbs({extname: ".hbs"}));
app.set("view engine", ".hbs");

app.use("/clients", clientRouter);

app.listen(3000);