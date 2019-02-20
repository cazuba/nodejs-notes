console.log("Starting notes.");

const DataSource = require("./data");

const PreloadData = cb => {
  DataSource.get((err, notes) => {
    if (err) throw err;
    cb(notes);
  });
};

const GetAll = cb => PreloadData(cb);

const AddNote = (_, cb) => {
  PreloadData(notes => {
    cb();
  });
};

const GetNote = (_, cb) => {
  PreloadData(notes => {
    cb();
  });
};

const RemoveNote = (_, cb) => {
  PreloadData(notes => {
    cb();
  });
};

module.exports = {
  AddNote,
  GetAll,
  GetNote,
  RemoveNote
};
