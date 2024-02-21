/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z4socx3z",
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
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // remove
  collection.schema.removeField("z4socx3z")

  return dao.saveCollection(collection)
})
