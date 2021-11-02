const express = require("express");
const hbs = require("express-handlebars");

const db = require("./utils/Db");


const homeRouter = require("./routes/home");
const clientRouter = require("./routes/clients");

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static("public"));
app.engine(".hbs", hbs({extname: ".hbs"}));
app.set("view engine", ".hbs");


app.use("/", homeRouter);
app.use("/clients", clientRouter);

app.get("/test", (req,res) =>
{
  db.create({name:"dsad", email:"sddsfs@wp.pl"});
  res.send("fsdf");
});

app.listen(3000);