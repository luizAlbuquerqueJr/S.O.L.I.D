class Machine1 {
  constructor (food) {
    this.food = food
  }
  buy () { console.log(`Comprei ${this.food}`) }
}
class Machine2 {
  constructor (food) {
    this.food = food
  }
  prepare () {
    if (this.food === 'carne') {
      console.log(
        `1º Cortei a carne em fatias
                2º Coloquei sal 
                3º Levei ao fogo por 25 minutos`
      )
    } else if (this.food === 'peixe') {
      console.log(
        `1º Cortei o peixe em fatias
                2º Coloquei limão e um pouco de sal
                3º Levei ao fogo por 20 minutos`
      )
    } else if (this.food === 'camarão') {
      console.log(
        `1º Removi a cabeça do camarão
                2º Coloquei  de sal e óleo
                3º Levei ao fogo por 20 minutos`
      )
    } else {
      console.log('Não sei fazer essa comida...')
    }
  }
}
class Machine3 {
  constructor (food) {
    this.food = food
  }
  serve () { console.log(`Servi  ${this.food}`) }
}

function main () {
  const chosenFood = 'carne'
  const machine1 = new Machine1(chosenFood)
  const machine2 = new Machine2(chosenFood)
  const machine3 = new Machine3(chosenFood)
  machine1.buy()
  machine2.prepare()
  machine3.serve()
}

main()
