/*
Practicar la componentización en React, utilizando los conceptos
de props y children, para construir una aplicación de "Lista de tareas"
(To-Do List).
Este ejercicio permitirá dividir la interfaz en componentes
reutilizables y modulares.
No necesita ser funcional, sólo se requiere el maquetado de la lista.
Objetivos
• Crear componentes reutilizables.
• Utilizar props para pasar datos y funciones
entre componentes.
• Utilizar children para componer componentes.
Componentes a crear
• TodoApp: Componente principal que organiza la aplicación.
• Header: Componente para el encabezado de la aplicación.
• TodoList: Componente para la lista de tareas.
• TodoItem: Componente para cada tarea individual.
• Footer: Componente para el pie de página de la aplicación.
*/


import TodoApp from './components/TodoApp'
import './App.css'

function App() {
  
  return (
    <div>
      <TodoApp></TodoApp>
    </div>
  )
}

export default App
