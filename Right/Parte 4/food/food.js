class food {
  constructor () {
    this._factory = {
      name: 'Developer.SA',
      address: 'Brasil RUA A',
      postalCode: 100
    }
  }

  get factory () {
    return this._factory
  }

  set factory (value) {
    this._factory = value
  }

  printFactory () {
    console.log(JSON.stringify(this._factory, null, 2))
  }
}

module.exports = food
