const express = require("express");

const {
  getAllClients, getOneClient, addClient,
  updateClient, deleteClient
} = require("../controllers/clientController");

const {generateAddForm, generateEditForm} = require("../controllers/formController");

const router = express.Router();

router.route("/").get(getAllClients).post(addClient);

router.route("/:id").get(getOneClient).put(updateClient).delete(deleteClient);

router.get("/form/add", generateAddForm);
router.get("/form/edit/:id", generateEditForm);

module.exports = router;
