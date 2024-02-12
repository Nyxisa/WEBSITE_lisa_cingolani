/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "snnh8pcb",
    "name": "softwares",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 11,
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
        "CSS",
        "Tailwind"
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
    "id": "snnh8pcb",
    "name": "softwares",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
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
        "CSS",
        "Tailwind"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
