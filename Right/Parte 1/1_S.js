class Machine1 {
  buy () { console.log('Comprei a pizza') }
}
class Machine2 {
  cut () { console.log('Cortei a pizza') }
}
class Machine3 {
  serve () { console.log('Servi a pizza') }
}

function main () {
  const machine1 = new Machine1()
  const machine2 = new Machine2()
  const machine3 = new Machine3()

  machine1.buy()
  machine2.cut()
  machine3.serve()
}
main()
