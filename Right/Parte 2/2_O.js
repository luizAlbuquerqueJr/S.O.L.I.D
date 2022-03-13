const Beef = require('./food/beef')
const Fish = require('./food/fish')
const Prawn = require('./food/prawn')

class Machine1 {
  constructor (food) {
    this.food = food
  }
  buy () { console.log(`Comprei ${this.food.name}`) }
}
class Machine2 {
  constructor (food) {
    this.food = food
  }
  prepare () {
    this.food.prepare()
  }
}
class Machine3 {
  constructor (food) {
    this.food = food
  }
  serve () { console.log(`Servi  ${this.food.name}`) }
}

function main () {
  // Aqui podemos desenvolver uma lógica para seleção do alimento
  // const chosenFood = new Carne()
  // const chosenFood = new Camarao()
  const chosenFood = new Fish()

  const machine1 = new Machine1(chosenFood)
  const machine2 = new Machine2(chosenFood)
  const machine3 = new Machine3(chosenFood)

  machine1.buy()
  machine2.prepare()
  machine3.serve()
}

main()
