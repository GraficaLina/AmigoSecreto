// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//1.varibles
const inputAmigo = document.getElementById("amigo");

const listaAmigos = [] ;

const ulListaAmigos = document.getElementById ("listaAmigos"); //llamados elementos html

const ulResultado = document.getElementById ("resultado");


//2. arreglos //3. funciones 

function agregarAmigo (){ 

    if (!inputAmigo.value){
        alert("No agregaste correctamente el nombre")} //VALORES VACIOS

    listaAmigos.push(inputAmigo.value);

   // console.log (listaAmigos); // Botón ya en consola recopila los nombres

   // CONCATENAR TEXTOS
   //InnerHTML-->JALA LO QUE ESTA ADENTRO Y LO IMPRIME
   //Forma1 --->  ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value; 

   // SINTETIZACIÓN FORMA 1---> TEXTO ESTA PEGADO ulListaAmigos.innerHTML += inputAmigo.value;

   //TEMPLATE STREAM PALABRAS + CODIGO --> NO SOLO TEXTO
   ulListaAmigos.innerHTML +=  `<li>${inputAmigo.value}</li>`;};



   function sortearAmigo() { //LOGICA PARA ESCOGER UN NOMBRE
   // encontrar aletoriedad -->Math
   
   const random = Math.floor(Math.random() * listaAmigos.length); //2. arreglos LENGHT
   const amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
        
}

        

//4. eventos
//5. objetos
