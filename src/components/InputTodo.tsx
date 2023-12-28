import { ComponentProps, useState } from "react";

type Props = {};

export function InputTodo({}: Props) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    console.log(input);
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
