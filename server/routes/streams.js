const db = require("../models");
const RestfulAPI = require("./restclass");

module.exports = app => {
  const stream = new RestfulAPI("streams", app, db.Stream);
  stream.createStream();
};
