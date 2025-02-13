import { createContext, useState, useContext } from "react";

const TodoContext = createContext([]);

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo hook called outside of TodoContextProvider");
  }
  return context;
};
export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id, isEditTodo, setIsEditTodo, updatedTitle) => {
    if (id) {
      setIsEditTodo({ editableId: id, isEdit: !isEditTodo.isEdit });
    }

    if (isEditTodo.isEdit && updatedTitle) {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title: updatedTitle };
          }
          return todo;
        });
      });
    }
  };

  const toggleTodoStatus = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, deleteTodo, editTodo, toggleTodoStatus }}>
      {children}
    </TodoContext.Provider>
  );
};
