/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbf0pyq4",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 12,
      "values": [
        "Branding",
        "Webdesign",
        "Typography",
        "Development",
        "3D",
        "Motion Design",
        "Print",
        "UI/UX",
        "Illustration",
        "Logo Design",
        "Packaging",
        "Editorial"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbf0pyq4",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Branding",
        "Webdesign",
        "Typography",
        "Development",
        "3D",
        "Motion Design",
        "Print",
        "UI/UX",
        "Illustration",
        "Logo Design",
        "Packaging",
        "Editorial"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
