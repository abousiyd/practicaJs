
function calculatePriceWhitDiscount(price, discount) {
  const procentajePrecioConDescuento = 100 - discount
  const precioConDescuento = (price * procentajePrecioConDescuento) / 100
  return precioConDescuento
}

function onClickButtonPriceDiscount () {

  const inputPrice = document.getElementById('inputPrice')
  const priceValue = inputPrice.value

  const inputDiscount = document.getElementById('inputDiscount')
  const discountValue = inputDiscount.value
  
  const total = calculatePriceWhitDiscount(priceValue, discountValue)
  printTotal(total)
}

function printTotal (total) {
  const resultTotal = document.getElementById('resultTotal')
  resultTotal.innerHTML = `
  <h1> El precio con descuento es: ${total} €</h1>
  `
}