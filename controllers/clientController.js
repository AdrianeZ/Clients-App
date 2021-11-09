const db = require("../utils/Db");
const checkClient = require("../utils/checkClient");

function getAllClients(req, res)
{
  res.render("clients/get-all",
      {
        clients: db.getAll()
      });
}

function getOneClient(req, res)
{
  const {id} = req.params;
  const client = checkClient(id);
  res.render("clients/one",
      {
        client
      })
}

function addClient(req, res)
{
  const clientId = db.create(req.body);
  res.status(201).render("clients/added", {name: req.body.name, clientId});
}

function updateClient(req, res)
{
  const {id} = req.params;
  checkClient(id);
  db.update(req.params.id, req.body)
  res.render("clients/modified",
      {
        name: req.body.name,
        clientId: req.params.id
      })
}

function deleteClient(req, res)
{
  const {id} = req.params;
  checkClient(id);
  db.delete(id);
  res.render("clients/deleted");
}

module.exports =
    {
      getAllClients,
      getOneClient,
      addClient,
      updateClient,
      deleteClient
    };