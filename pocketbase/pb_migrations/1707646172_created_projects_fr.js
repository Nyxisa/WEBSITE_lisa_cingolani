/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sbxwu1duppdjwwt",
    "created": "2024-02-11 10:09:32.452Z",
    "updated": "2024-02-11 10:09:32.452Z",
    "name": "projects_fr",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8xktwxln",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ztzmsdqv",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sbxwu1duppdjwwt");

  return dao.deleteCollection(collection);
})
