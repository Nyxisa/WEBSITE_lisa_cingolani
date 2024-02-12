/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  collection.listRule = ""
  collection.viewRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfxt0xvq",
    "name": "card_image",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsd2atqr",
    "name": "alt_image",
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
    "id": "to0rmyjv",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdqxtftw",
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
    "id": "xrnyorab",
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
    "id": "cbvfltgs",
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
    "id": "howajbmp",
    "name": "textli1",
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
    "id": "zwryc08f",
    "name": "textli2",
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
    "id": "l6sfhozu",
    "name": "textli3",
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
    "id": "72ma8mvn",
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
    "id": "fs3uyft7",
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
    "id": "1huq7v8a",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kl9ejqje",
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
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  collection.listRule = null
  collection.viewRule = null

  // remove
  collection.schema.removeField("yfxt0xvq")

  // remove
  collection.schema.removeField("pbf0pyq4")

  // remove
  collection.schema.removeField("zsd2atqr")

  // remove
  collection.schema.removeField("to0rmyjv")

  // remove
  collection.schema.removeField("gdqxtftw")

  // remove
  collection.schema.removeField("xrnyorab")

  // remove
  collection.schema.removeField("cbvfltgs")

  // remove
  collection.schema.removeField("howajbmp")

  // remove
  collection.schema.removeField("zwryc08f")

  // remove
  collection.schema.removeField("l6sfhozu")

  // remove
  collection.schema.removeField("72ma8mvn")

  // remove
  collection.schema.removeField("fs3uyft7")

  // remove
  collection.schema.removeField("1huq7v8a")

  // remove
  collection.schema.removeField("snnh8pcb")

  // remove
  collection.schema.removeField("kl9ejqje")

  return dao.saveCollection(collection)
})
