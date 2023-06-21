import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleDownClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handleClearClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newtext = " ";
    settext(newtext);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "white" : "#1F305E" }}
      >
        <h1> {props.heading} </h1>{" "}
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#1F305E",
            }}
            id="my-box"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Covert to lowwercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "white" : "#1F305E" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview something"}
        </p>
      </div>
    </>
  );
}
