class Prawn {
  constructor () {
    this._name = 'Camarao'
  }
  prepare () {
    console.log(
      `1º Removi a cabeça do camarão
            2º Coloquei  de sal e óleo
            3º Levei ao fogo por 20 minutos`
    )
  }

  get name () {
    return this._name
  }
}
module.exports = Prawn
