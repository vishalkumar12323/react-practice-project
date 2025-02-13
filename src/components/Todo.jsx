import { useState, useEffect } from "react";
import { useTodos } from "../context/TodoContext";
import { useTheme } from "../context/ThemeContext";
import "../styles/todo.css";

export const Todo = () => {
  const { todos, setTodos, editTodo, deleteTodo, toggleTodoStatus } =
    useTodos();

  const { appTheme, toggleTheme } = useTheme();
  const [input, setInput] = useState("");
  const [isEditTodo, setIsEditTodo] = useState({
    editableId: 0,
    isEdit: false,
  });
  const [editInput, setEditInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: (prevTodos.length + 1).toString(),
            title: input,
          },
        ];
      });
    }
    setInput("");
  };

  useEffect(() => {
    document.body.classList.toggle("theme");
  }, [appTheme.theme, appTheme.isDark]);
  return (
    <div className="todo_container">
      <h1 className="heading">Todo List</h1>
      <button className="theme_btn" onClick={() => toggleTheme()}>
        {appTheme.theme}
      </button>
      <form className="todo_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo_list">
        {todos && todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <div key={todo.id} className="todo">
                {isEditTodo.isEdit && isEditTodo.editableId == todo.id ? (
                  <input
                    type="text"
                    defaultValue={todo.title}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="edit_input"
                    autoFocus={true}
                  />
                ) : (
                  <div style={{ display: "flex", gap: "3px" }}>
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="todo_input"
                      defaultChecked={todo.completed}
                      onChange={() => toggleTodoStatus(todo.id)}
                    />
                    <p
                      style={
                        todo.completed
                          ? { textDecoration: "line-through" }
                          : null
                      }>
                      {todo.title}
                    </p>
                  </div>
                )}

                <div style={{ display: "flex", gap: "5px" }}>
                  <button
                    onClick={() =>
                      editTodo(todo.id, isEditTodo, setIsEditTodo, editInput)
                    }>
                    {isEditTodo.isEdit && isEditTodo.editableId == todo.id
                      ? "✅"
                      : "Edit"}
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1>No any todo yet.</h1>
          </div>
        )}
      </div>
    </div>
  );
};
