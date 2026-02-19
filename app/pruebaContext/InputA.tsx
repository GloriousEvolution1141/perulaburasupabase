interface InputProps {
  text: string;
  setText: (value: string) => void;
}

export default function InputA({ text, setText }: InputProps) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>Input A: </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "5px" }}
      />
    </div>
  );
}
