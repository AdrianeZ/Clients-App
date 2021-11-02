const {writeFile, readFile} = require("fs").promises;
const {resolve} = require("path");
const {v4: uuid} = require("uuid");

class Db
{
  constructor(fileResource)
  {
    this.fileResource = resolve(__dirname, "..", "data", fileResource);
    this._loadData();
  }

  async _loadData()
  {
    this._data = JSON.parse(await readFile(this.fileResource, "utf-8"));
  }

  create(obj)
  {

    this._data.push(Object.assign({id: uuid()}, obj));
    writeFile(this.fileResource, JSON.stringify(this._data), "utf-8");
  }

  getAll()
  {
    return this._data;
  }

  update(id, newObj)
  {
    this._data = this._data.map(oneObj => {
      if (oneObj.id === id)
      {
        return {
         ...oneObj,
         ...newObj
       };
      }
      else
        return oneObj;
    })

    writeFile(this.fileResource, JSON.stringify(this._data), "utf-8");
  }
  delete(id)
  {
    this._data.filter(oneObj => oneObj.id !== id);
    writeFile(this.fileResource, JSON.stringify(this._data), "utf-8");
  }

}

const db = new Db("clients.json");

module.exports = db;