class RestfulAPI {
  constructor(resourceName, app, model) {
    this.resource = resourceName;
    this.app = app;
    this.model = model;
  }

  allStreams() {
    this.app.get(`/${this.resource}`, (req,res) => {
      this.model.find({})
        .then( (data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err)
        })
    })
  }

  findStream() {
    this.app.get(`/${this.resource}/:id`, (req, res) => {
      this.model.findById({ id: req.params.id })
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

  // updateStream() {

  // }

  deleteStream() {
    this.app.delete(`/${this.resource}/:id`, (req, res) => {
      this.model.findOneAndDelete({_id: req.params.id})
      .then(() => {
        res.json({success: 'Item has been deleted'})
      })
      .catch((err) => {
        res.json(err)
      })
    })
  }
}

module.exports = RestfulAPI