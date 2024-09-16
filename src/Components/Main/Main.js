import React, { useState } from "react";

export default function Main(props) {
  const uppercase = () => {
    console.log("Uppercase is clicked " + text);
    let UC = text.toUpperCase();
    setText(UC);
  };

  const lowercase = () => {
    console.log("Lowercase is clicked " + text);
    let LC = text.toLowerCase();
    setText(LC);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    console.log(setText(event.target.value));
  };

  const reset = () => {
    const Text = "";
    return setText(
      (document.getElementsByClassName("form-control").value = Text)
    );
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 my-4 px-5 mx-5">
        <h3>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label px-3"
          >
            {props.heading}
          </label>
        </h3>
        <textarea
          className="form-control mb-4"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="Enter your text here"
        ></textarea>
      </div>

      <div className="container text-center">
        <button className="btn btn-primary mx-2" onClick={uppercase}>
          Convert to 'UPPERCASE'
        </button>

        <button className="btn btn-primary mx-2" onClick={lowercase}>
          Convert to 'lowercase'
        </button>

        <button className="btn btn-primary mx-2" onClick={reset}>
          Reset Text
        </button>
      </div>
    </>
  );
}
