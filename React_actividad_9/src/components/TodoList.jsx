import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ tareas }) {
  const listaDeTareas = tareas.map((tarea, index) => {
    return <TodoItem key={index} tarea={tarea} />;
  });

  return (
    <ul>
      {listaDeTareas}
    </ul>
  );
}

export default TodoList;
