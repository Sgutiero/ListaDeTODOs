import React from "react";
import CreateTodoButton from "../CreateTodoButton/index.jsx";
import TodoCounter from "../TodoCounter/index.jsx";
import TodoItem from "../TodoItem/index.jsx";
import TodoList from "../TodoList/index.jsx";
import TodoSearch from "../TodoSearch/index.jsx";


function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        // Mostramos un mensaje en caso de que ocurra algún error
        {error && <p>Desespérate, hubo un error...</p>}
        // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos
        {loading && <p>Estamos cargando, no desesperes...</p>}
        // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default AppUI;
