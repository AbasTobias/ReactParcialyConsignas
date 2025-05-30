import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";

function TodoApp() {
  const tareas = ["Estudiar React", "Ir al gimnasio", "Tomar agua"];

  return (
    <>
      <Header />
      <TodoList tareas={tareas} />
      <Footer />
    </>
  );
}

export default TodoApp;
