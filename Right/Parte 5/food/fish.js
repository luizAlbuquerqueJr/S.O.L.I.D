const Food = require('./food')
class Fish extends Food {
  constructor () {
    super()
    this._name = 'Peixe'
  }
  prepare () {
    console.log(
      `1º Cortei o peixe em fatias
            2º Coloquei limão e um pouco de sal
            3º ${this.timeOnAirFryer(20)}`
    )
  }

  get name () {
    return this._name
  }
}
module.exports = Fish
