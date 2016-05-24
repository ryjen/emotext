use emotext_development
db.actions.ensureIndex( { "name": 1 }, { unique: true })
db.aliases.ensureIndex( { "name": 1 }, { unique: true })
cursor = db.history_items.find({})
if (cursor.hasNext()) {
    db.runCommand({"convertToCapped": "history_items", size: 1048576, max: 100});
} else {
    db.createCollection("history_items", { capped : true, size : 1048576, max : 100 } )
}
