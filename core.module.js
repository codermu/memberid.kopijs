/*
Kopi 1.0 Module Management
*/
function Module() {
  this.list = []
  this.current = ''
  this.register = function (module) {
    this.current = module
    this.list.push(module)
  }

}

Kopi.prototype.module = new Module()
