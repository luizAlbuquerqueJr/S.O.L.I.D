class Machine1 {
  buy () {
    console.log('Comprei a pizza')
  }
  cut () {
    console.log('Cortei a pizza')
  }
  serve () {
    console.log('Servi a pizza')
  }
}

function main () {
  const machine1 = new Machine1()
  machine1.buy()
  machine1.cut()
  machine1.serve()
}

main()
