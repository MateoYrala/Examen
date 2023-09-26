var nom = prompt("Ingresa tu nombre");
var c
var i
alert("Bienvenido(a) :"+nom);
alert("Este cuestionario es acerca de las Olimpiadas escolares, por lo que procederé a preguntarte sobre ellas");

var p1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");
if (p1 = B){
    c=c+1
}else if (p1 = A){
i=i+1
    }else if(p1 = C){
        i=i+1
    }else{
        alert("No es una opción válida")
    }
    var p2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB. Rojo\nC. Morado");
    if (p2 = A){
        c=c+1
    }else if (p2 = B){
    i=i+1
        }else if(p2 = C){
            i=i+1
        }else{
            alert("No es una opción válida")
        }
        var p3 = prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética");
        if (p3 = A){
            c=c+1
        }else if (p3 = B){
        i=i+1
            }else if(p3 = C){
                i=i+1
            }else{
                alert("No es una opción válida")
            }  
            if(c>i){
                document.write(nombre+", lo has hecho bien<br>"+nom)
                document.write("Respuestas correctas: "+c)
                document.write("Respuestas incorrectas: "+i)
            }else if(c<i){
                document.write(nombre+", vuelve a intentarlo<br>"+nom)
                document.write("Respuestas correctas: "+c)
                document.write("Respuestas incorrectas: "+i)
            }else{
                document.write(nombre+", puedes hacerlo mejor<br>"+nom)
                document.write("Respuestas correctas: "+c)
                document.write("Respuestas incorrectas: "+i)
            }