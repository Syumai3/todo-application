import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { Todo } from "./types/todo";

const todoListMock: Todo[] = [
  { id: "1", status: "未着手", title: "山梨に行く" },
  { id: "2", status: "未着手", title: "ワーケーションする" },
  { id: "3", status: "未着手", title: "一蘭のラーメンを食べる" },
  { id: "4", status: "着手中", title: "Reactの勉強をする" },
  { id: "5", status: "完了", title: "nsips のパーサーを作る" },
];

function App() {
  const [todoList] = useState(todoListMock);
  return (
    <>
      <h1>TODOリスト</h1>
      <InputTodo />
      <TodoList list={todoList} />
    </>
  );
}

export default App;
