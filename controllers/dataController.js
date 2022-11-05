const { update } = require('../models/cup')
const Cup = require('../models/cup')

const dataController = {
  // Index,
  index (req, res, next) {
    Cup.find({}, (err, foundCups) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.cups = foundCups
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Cup.findByIdAndDelete(req.params.id, (err, deletedCup) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.cup = deletedCup
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.readyForVacation = req.body.readyForVacation === 'on'
    Cup.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCup) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.cup = updatedCup
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.readyForVacation = req.body.readyForVacation === 'on'
    Cup.create(req.body, (err, createdCup) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.cup = createdCup
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Cup.findById(req.params.id, (err, foundCup) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a cup with that ID'
        })
      } else {
        res.locals.data.cup = foundCup
        next()
      }
    })
  }
}

module.exports = dataController