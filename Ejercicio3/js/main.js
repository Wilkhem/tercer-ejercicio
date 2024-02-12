function limpiar() {
    document.getElementById("kmInput").value = "";
    document.getElementById("metrosOutput").value = "";
    document.getElementById("metrosInput").value = "";
    document.getElementById("cmOutput").value = "";
    document.getElementById("ftInput").value = "";
    document.getElementById("pulgOutput").value = "";
    document.getElementById("yardaInput").value = "";
    document.getElementById("pulgYardaOutput").value = "";
  }
  
  document.getElementById("kmInput").addEventListener("input", function() {
    var km = parseFloat(this.value);
    var metros = km * 1000;
    document.getElementById("metrosOutput").value = metros;
  });
  
  document.getElementById("metrosInput").addEventListener("input", function() {
    var metros = parseFloat(this.value);
    var cm = metros * 100;
    document.getElementById("cmOutput").value = cm;
  });
  
  document.getElementById("ftInput").addEventListener("input", function() {
    var ft = parseFloat(this.value);
    var pulgadas = ft * 12;
    document.getElementById("pulgOutput").value = pulgadas;
  });
  
  document.getElementById("yardaInput").addEventListener("input", function() {
    var yarda = parseFloat(this.value);
    var pulgadas = yarda * 36;
    document.getElementById("pulgYardaOutput").value = pulgadas;
  });
  