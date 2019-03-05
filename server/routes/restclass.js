class RestfulAPI {
  constructor(resourceName, app, model) {
    this.resource = resourceName;
    this.app = app;
    this.model = model;
  }

  allStreams() {
    this.app.get(`/${this.resource}`, (req,res) => {
      this.model.find({})
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err)
        })
    })
  }

  findStream() {
    this.app.get(`/${this.resource}/:id`, (req, res) => {
      this.model.findById(req.params.id)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
    })
  }

  createStream() {
    this.app.post(`/${this.resource}`, (req, res) => {
      this.model.create(req.body)
        .then((data) => {
          res.json(data)
        })
        .catch((err) => {
          res.json(err)
        })
    })
  }

  updateStream() {
    this.app.patch(`/${this.resource}/:id`, (req, res) => {
      this.model.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
    })
  }

  deleteStream() {
    this.app.delete(`/${this.resource}/:id`, (req, res) => {
      this.model.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.send(data._id)
      })
      .catch((err) => {
        res.json(err)
      })
    })
  }
}

module.exports = RestfulAPI