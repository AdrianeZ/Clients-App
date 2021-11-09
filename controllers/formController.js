const db = require("../utils/Db");
const checkClient = require("../utils/checkClient");

function generateAddForm(req, res)
{
  res.render("clients/forms/add");
}

function generateEditForm(req, res)
{
  const {id} = req.params;
  const client = checkClient(id);
  res.render("clients/forms/edit",
      {
        client
      });
}

module.exports =
    {
      generateAddForm,
      generateEditForm
    };