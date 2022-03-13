class Fish {
  constructor () {
    this._name = 'Peixe'
  }
  prepare () {
    console.log(
      `1º Cortei o peixe em fatias
            2º Coloquei limão e um pouco de sal
            3º Levei ao fogo por 20 minutos`
    )
  }

  get name () {
    return this._name
  }
}
module.exports = Fish
