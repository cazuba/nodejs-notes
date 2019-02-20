const fs = require("fs");
const NOTES_DATA_JSON = "./notes-data.json";

const fileExists = cb => fs.access(NOTES_DATA_JSON, cb);

const createSource = cb => {
  fileExists(err => {
    if (!err) return cb(null, "DataSource already exists!");
    const initialSource = [];
    saveJSON(initialSource, () => cb(null, 'DataSource created!'));
  });
};

const readJSON = cb => {
  fileExists(err => {
    if (err) return cb(err, null);
    else {
      const notesString = fs.readFileSync(NOTES_DATA_JSON);
      cb(null, JSON.parse(notesString));
    }
  });
};

const saveJSON = (obj, cb) => {
  fs.writeFileSync(NOTES_DATA_JSON, JSON.stringify(obj));
  cb(null, 'Changes saved!');
};

module.exports = {
  createSource,
  exists: fileExists,
  get: readJSON,
  save: saveJSON
};
