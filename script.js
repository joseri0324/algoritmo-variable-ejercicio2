let peso = parseInt(prompt
    ("peso actual"))
 
let altura = parseInt(prompt
        ("altura"))

        let imc = peso / (altura * altura);


        let clasificacion;
        
        if (imc < 18.5) {
            clasificacion = "peso bajo";
        } else if (imc >= 18.5 && imc < 25) {
            clasificacion = "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            clasificacion = "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            clasificacion = "Obesidad clase 1";
        } else if (imc >= 35 && imc < 40) {
            clasificacion = "obesidad clase 2"
        } else {
            clasificacion = "obesidad clase 3"
        }        