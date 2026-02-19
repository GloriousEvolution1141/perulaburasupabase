"use client";
import { useState } from "react";
import InputA from "./InputA";
import InputB from "./InputB";

export default function SharedInputs() {
  const [text, setText] = useState<string>(""); // estado compartido

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1>Inputs Compartidos sin Layout</h1>

      <InputA text={text} setText={setText} />
      <InputB text={text} setText={setText} />

      {/* <p>Valor compartido: {text}</p> */}
    </div>
  );
}
