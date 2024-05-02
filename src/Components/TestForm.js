import React, { useState } from "react";

export default function TestForm() {
  const [inp, setInp] = useState("");
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const [output, setOutput] = useState(false);
  const handleSubmit = () => {
    setOutput(true);
  };
  return (
    <div>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      ></input><br/>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea><br/>
      <select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option>Select an option</option>
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select><br/>
      <button onClick={handleSubmit}>Submit</button>
      {output && (
        <p>
          {inp} {text} {select}
        </p>
      )}
    </div>
  );
}
