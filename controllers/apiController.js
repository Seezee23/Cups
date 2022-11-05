const apiController = {
  index(req, res, next){
    res.json(res.locals.data.cups)
  },
  show(req, res, next){
    res.json(res.locals.data.cup)
  }
}

module.exports = apiController