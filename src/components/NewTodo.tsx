import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodos: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleTodoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodos(enteredText);
  };
  return (
    <form onSubmit={handleTodoSubmit}>
      <div className="form-control">
        <label htmlFor="todo-tetx">Todo Text</label>
        <input ref={textInputRef} type="text" id="todo-text" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
