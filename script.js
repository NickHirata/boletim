function calcularMedia() {
    // Obter os valores das notas
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
  
    // Calcular a média
    var media = (nota1 + nota2) / 2;
    var media2 = (nota3 + nota4) / 2;
  
    // Verificar se o aluno passou ou não
    var passou = (media >= 6 && media2 >=6);
  
    // Exibir o resultado na página
    document.getElementById("media").value = media;
    document.getElementById("media2").value = media2;
    document.write= "Situação: " + (passou ? "Aprovado" : "Reprovado");
    alert(passou ? "Aprovado" : "Reprovado");
    
    if (media < 6) {
        document.getElementById("media").style.color = "red";
    } else {
        document.getElementById("media").style.color = "#4CAF50";
    }
        
    if (media2 < 6) {
        document.getElementById("media2").style.color = "red";
    } else {
        document.getElementById("media2").style.color = "#4CAF50";
    }
      

  }
  