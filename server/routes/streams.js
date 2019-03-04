const db = require("../models");
const RestfulAPI = require("./restclass");

module.exports = app => {
  const newStream = new RestfulAPI("streams", app, db.Stream);
  newStream.createStream();

  const getAll = new RestfulAPI("streams", app, db.Stream)
  getAll.allStreams();

  const getOne = new RestfulAPI("streams", app, db.Stream)
  getOne.findStream();

  const update = new RestfulAPI("streams", app, db.Stream)
  update.updateStream();

  const destroy = new RestfulAPI("streams", app, db.Stream)
  destroy.deleteStream();
};
