const db = require("./Db");
const {NotFoundError} = require("./error");

function checkClient(id)
{
  const client = db.getOne(id);
  if(!client)
  {
    throw new NotFoundError("Client doesn't exists");
  }

  return client;
}

module.exports = checkClient;