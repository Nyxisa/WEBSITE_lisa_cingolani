/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rd1xcdxo",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 11,
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
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rd1xcdxo",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 11,
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
        "Packaging"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
