document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    var valor1 = parseFloat(document.getElementById('numeroA').value);
    var valor2 = parseFloat(document.getElementById('numeroB').value);


    if (valor1 > valor2) {
        alert('Infelizmente A é maior que B ');
    } else {
        alert('Parabéns,B é maior que A');
    }
});
