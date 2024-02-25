class Complex {
  constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }
  add(num) {
    this.real = this.real + num.real
    this.imaginary = this.imaginary + num.imaginary
  }
}

let a = new Complex(4, 8)
let b = new Complex(6, 2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

