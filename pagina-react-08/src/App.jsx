/*
Crear un  proyecto de React.js
renderizar una pweb con un  titulo y un parrafo
crear una constante con algun valor del tipo string y renderizarlos cdentro del parrafo
dentro de la carpeta public colocar una imegen  y represenatar la imagen en la  pagina
crear un array de elementos con objetos literales por ejemplo posteos, producots
recorrer el array y representarlo en la pagina web */


function App() {
  const infop = "aca podras ver todos los luchadores libra por libra dentro de la UFC"
const luchadores = [
  { id: 1, nombre: 'Islam Makhachev' },
  { id: 2, nombre: 'Jon Jones' },
  { id: 3, nombre: 'Ilia Topuria' },
  { id: 4, nombre: 'Merab Dvalishvili' },
  { id: 5, nombre: 'Dricus Du Plessis' },
  { id: 6, nombre: 'Magomed Ankalaev' },
  { id: 7, nombre: 'Alexander Volkanovski' },
  { id: 8, nombre: 'Alex Pereira' },
  { id: 9, nombre: 'Jack Della Maddalena' },
  { id: 10, nombre: 'Alexandre Pantoja' },
  { id: 11, nombre: 'Tom Aspinall' },
  { id: 12, nombre: 'Max Holloway' },
  { id: 13, nombre: 'Belal Muhammad' },
  { id: 14, nombre: 'Sean O’Malley' },
  { id: 15, nombre: 'Charles Oliveira' }
];

const listarLuchadores = luchadores.map((luchador)=>
  <li key ={luchador.id}> {luchador.nombre}</li>
  );

  
  return (
    <div>
      <h1>Luchadores Libra por libra</h1>
      <p>{infop}</p>
      <img src="/img/dan.jpeg" alt="Imagen del Luchador Dan Hooker" />
      <div>
      <map name=""></map>
      </div>
      <ul>  
           {listarLuchadores}
           </ul>
       </div>
    
  );
}

export default App;
