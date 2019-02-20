console.log("Starting app.js");

const yargs = require("yargs");
const notes = require("./notes");

const argv = yargs.argv;
console.log(argv);

const command = "";

const callback = (err, id) => {
  if (err) console.log(err);
  else console.log(id);
};

const execute = action => {
  switch (action) {
    case "createSource":
      notes.createSource(callback);
      break;
    case "add":
      console.log('Add new note');
      break;
    case "read":
      notes.getNote(id, callback);
      break;
    case "remove":
        console.log('Remove note');
      break;
    case "list":
      console.log('List notes');
      break;
    default:
      console.log("Nice try...keep trying.");
      break;
  }
};

execute(command);
