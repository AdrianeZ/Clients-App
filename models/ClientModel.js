const {ValidationError} = require("../utils/error");

class ClientModel
{

  constructor(obj)
  {
    this.validate(obj);
    this.id = obj.id;
    this.email = obj.email;
    this.name = obj.name;
    this.nextContactAt = obj.nextContactAt;
    this.notes = obj.notes;
  }

  validate(obj)
  {
    const {id, name, email, nextContactAt, notes} = obj;

    if(!id || typeof id !== "string")
    {
      throw new ValidationError("something went wrong");
    }

    if(!name || typeof name !== "string" || name.length <3)
    {
      throw new ValidationError("name should be a text and must have at least 3 characters");
    }

    if(!email || typeof email !== "string" || email.indexOf("@") === -1)
    {
      throw new ValidationError("email is invalid");
    }

    if(typeof nextContactAt !== "string")
    {
      throw new ValidationError("Date of next Contact must be text");
    }

    if(typeof notes !== "string")
    {
      throw new ValidationError("notes must be text");
    }



  }

}

module.exports = ClientModel;