/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nvnddz8a",
    "name": "link",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // remove
  collection.schema.removeField("nvnddz8a")

  return dao.saveCollection(collection)
})
