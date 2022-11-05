const { estimatedDocumentCount } = require('../models/cup')

const RESOURCE_PATH = '/cups'

const viewController = {
  index (req, res, next) {
    res.render('cups/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('cups/New')
  },
  edit (req, res, next) {
    res.render('cups/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('cups/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const cupId = req.params.id || res.locals.data.cup._id
    res.redirect(`${RESOURCE_PATH}/${cupId}`)
  }
}

module.exports = viewController