/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "icxhhwpy",
    "name": "text_1",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rm9e2wec",
    "name": "text_2",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnj84emm",
    "name": "text_3",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xk6bz6hv",
    "name": "text_4",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zh2hs01s",
    "name": "text_5",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqcxkyqc",
    "name": "text_li",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diblmxdk",
    "name": "intro_",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztfjcvef",
    "name": "outro_",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfxt0xvq",
    "name": "main_image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 9999999,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owbp30hp",
    "name": "gallery",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 99999999,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt")

  // remove
  collection.schema.removeField("icxhhwpy")

  // remove
  collection.schema.removeField("rm9e2wec")

  // remove
  collection.schema.removeField("lnj84emm")

  // remove
  collection.schema.removeField("xk6bz6hv")

  // remove
  collection.schema.removeField("zh2hs01s")

  // remove
  collection.schema.removeField("hqcxkyqc")

  // remove
  collection.schema.removeField("diblmxdk")

  // remove
  collection.schema.removeField("ztfjcvef")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfxt0xvq",
    "name": "main_image",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owbp30hp",
    "name": "gallery",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 9999999,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
