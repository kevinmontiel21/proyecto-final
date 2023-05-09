function calcularIVA() {
	var precio = parseFloat(document.getElementById("precio").value);
	var cantidad = parseFloat(document.getElementById("cantidad").value);
	var porcentajeIva = parseFloat(document.getElementById("porcentajeIva").value);
	var moneda = document.getElementById("moneda").value;
  
	var subtotal = precio * cantidad;
	var iva = subtotal * (porcentajeIva / 100);
	var total = subtotal + iva;

	// Obtener la tasa de cambio de la moneda seleccionada a USD
	var url = "https://api.exchangerate-api.com/v4/latest/USD";
	fetch(url)
		.then(response => response.json())
		.then(data => {
			var tasaCambio = data.rates[moneda];
			var totalEnMoneda = total * tasaCambio;
			document.getElementById("resultado").innerHTML = "Subtotal: $" + subtotal.toFixed(2) + "<br>IVA: $" + iva.toFixed(2) + "<br>Total: $" + total.toFixed(2) + "<br>Total en " + moneda + ": " + moneda + " " + totalEnMoneda.toFixed(2);
		})
		.catch(error => console.log(error));
}




