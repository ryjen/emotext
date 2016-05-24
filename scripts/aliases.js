use emotext_development
db.aliases.insert({ "name": ":-)", action_id: db.actions.findOne({ name: "smile" }, { _id: 1})._id })
