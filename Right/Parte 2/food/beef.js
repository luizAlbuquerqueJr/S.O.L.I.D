class Beef {
  constructor () {
    this._name = 'Carne'
  }
  prepare () {
    console.log(
      `1º Cortei a carne em fatias
            2º Coloquei sal 
            3º Levei ao fogo por 25 minutos`
    )
  }

  get name () {
    return this._name
  }
}
module.exports = Beef
