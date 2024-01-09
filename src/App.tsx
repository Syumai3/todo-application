import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { Todo } from "./types/todo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: (todoList.length + 1).toString(),
      status: "未着手",
      title: title,
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <h1>TODOリスト</h1>
      <InputTodo onAddTodo={addTodo} />
      <TodoList list={todoList} />
    </>
  );
}

export default App;
