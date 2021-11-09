const {writeFile, readFile} = require("fs").promises;
const {resolve} = require("path");
const {v4: uuid} = require("uuid");
const ClientModel = require("../models/ClientModel");

class Db
{
  constructor(fileResource)
  {
    this.fileResource = resolve(__dirname, "..", "data", fileResource);
    this._loadData();
  }

  async _loadData()
  {
    this._data = JSON.parse(await readFile(this.fileResource, "utf-8")).map(obj => new ClientModel(obj));
  }

  create(obj)
  {
    const id = uuid();
    this._data.push(new ClientModel(Object.assign({id}, obj)));
    writeFile(this.fileResource, JSON.stringify(this._data), "utf-8");
    return id;
  }

  getAll()
  {
    return this._data;
  }

  getOne(id)
  {
    return this._data.find(oneObj => oneObj.id === id);
  }

  update(id, newObj)
  {
    this._data = this._data.map(oneObj => {
      if (oneObj.id === id)
      {
        const updatedObj = {...oneObj, ...newObj};
        return new ClientModel(updatedObj);
      }
      else
        return oneObj;
    })

    writeFile(this.fileResource, JSON.stringify(this._data), "utf-8");
  }

  delete(id)
  {
    this._data = this._data.filter(oneObj => oneObj.id !== id);
    this._save();
  }

  _save()
  {
    writeFile(this.fileResource, JSON.stringify(this._data), "utf-8");
  }

}

const db = new Db("clients.json");

module.exports = db;