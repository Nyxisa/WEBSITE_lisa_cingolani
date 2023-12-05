/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0qxu9dsy",
    "name": "softwares",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 7,
      "values": [
        "Figma",
        "Illustrator",
        "InDesign",
        "AfterEffects",
        "Photoshop",
        "Dimension",
        "Blender",
        "Vue.js",
        "HTML",
        "CSS"
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
    "id": "0qxu9dsy",
    "name": "softwares",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 7,
      "values": [
        "Figma",
        "Illustrator",
        "InDesign",
        "AfterEffects",
        "Photoshop",
        "Dimension",
        "Blender"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
