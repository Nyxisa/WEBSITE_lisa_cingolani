/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uimzfihm",
    "name": "intro",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rdzkknc0",
    "name": "image2",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nvgvmgql",
    "name": "text1",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tkgkfshe",
    "name": "text2",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v8my4i8b",
    "name": "text3",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tfwpd9dr",
    "name": "text4",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyjovrf0",
    "name": "outro",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e4dmtn8t",
    "name": "softwares_icons",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gd7x3guczi2g9m")

  // remove
  collection.schema.removeField("uimzfihm")

  // remove
  collection.schema.removeField("rdzkknc0")

  // remove
  collection.schema.removeField("nvgvmgql")

  // remove
  collection.schema.removeField("tkgkfshe")

  // remove
  collection.schema.removeField("v8my4i8b")

  // remove
  collection.schema.removeField("tfwpd9dr")

  // remove
  collection.schema.removeField("vyjovrf0")

  // remove
  collection.schema.removeField("0qxu9dsy")

  // remove
  collection.schema.removeField("e4dmtn8t")

  return dao.saveCollection(collection)
})
