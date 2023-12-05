/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // remove
  collection.schema.removeField("ksahs6tt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ksahs6tt",
    "name": "text_field",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
