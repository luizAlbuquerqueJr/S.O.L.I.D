const Food = require('./food')
class Cookie extends Food {
  constructor () {
    super()
    this._name = 'Biscoito'
    this.hasPrepare = false
  }

  get name () {
    return this._name
  }
}
module.exports = Cookie
