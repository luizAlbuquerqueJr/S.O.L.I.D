const Beef = require('./food/beef')
const Fish = require('./food/fish')
const Prawn = require('./food/prawn')
const Cookie = require('./food/cookie')

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
  // const chosenFood = new Carne()
  // const chosenFood = new Camarao()
  // const chosenFood = new Peixe()
  const chosenFood = new Cookie()

  const machine1 = new Machine1(chosenFood)
  machine1.buy()

  if (chosenFood.hasPrepare) {
    const machine2 = new Machine2(chosenFood)
    machine2.prepare()
  }

  const machine3 = new Machine3(chosenFood)
  machine3.serve()
}

main()
