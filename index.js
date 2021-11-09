const express = require("express");
const hbs = require("express-handlebars");
const methodOverride = require("method-override");


const {handleError} = require("./utils/error");
const db = require("./utils/Db");
const homeRouter = require("./routes/home");
const clientRouter = require("./routes/clients");

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride("_method"))
app.use(express.json());
app.use(express.static("public"));
app.engine(".hbs", hbs({extname: ".hbs"}));
app.set("view engine", ".hbs");


app.use("/", homeRouter);
app.use("/clients", clientRouter);

app.use(handleError);


app.listen(3000);