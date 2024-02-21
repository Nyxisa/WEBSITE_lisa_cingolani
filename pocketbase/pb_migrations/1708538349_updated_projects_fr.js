/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diblmxdk",
    "name": "intro",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztfjcvef",
    "name": "outro",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diblmxdk",
    "name": "intro_",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztfjcvef",
    "name": "outro_",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
