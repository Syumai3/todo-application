import { Todo } from "../types/todo";

type Props = {
  list: Todo[];
};

export function TodoList({ list }: Props) {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <span>[{item.status}]</span>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
