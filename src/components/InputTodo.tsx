import { ComponentProps, useState } from "react";

type Props = {
  onAddTodo: (title: string) => void;
};

export function InputTodo({ onAddTodo }: Props) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() !== "") {
      onAddTodo(input);
      setInput("");
    }
  };

  const handleChangeInput: ComponentProps<"input">["onChange"] = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleChangeInput}
        type="text"
        placeholder="todoを入力"
      />
      <button onClick={handleClick}>
        登録
      </button>
    </div>
  );
}
