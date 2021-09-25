import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //Will uppercase the text and update text
    setText(text.toUpperCase());
    props.showAlert("Converted To UpperCase", "success");
  };
  const handleLowClick = () => {
    //Will lowercase the text and update text
    setText(text.toLowerCase());
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleCapsClick = () => {
    let words = text.toLowerCase().split(" ");
    let CapWords = words.map(elt => elt.charAt(0).toUpperCase() + elt.substring(1))
    setText(CapWords.join(" "));
    props.showAlert("Intial Words Capitalized", "success");
  };
  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard", "success");
  };
  const handleClear = () => {
    setText(" ");
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    //Will take every key press and update text
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1><strong>{props.heading}</strong></h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'light' ? 'white' : '#444444', color: props.mode === 'light' ? 'black' : 'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCapsClick}>
          Capitalized case
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-success mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length === 0} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2><strong>Your Text Summary</strong></h2>
        <p>
          {text.split(/\s+/).filter((elt) => {return elt.length !== 0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((elt) => {return elt.length !== 0}).length} Minutes to Read</p>
        <h2><strong>Preview</strong></h2>
        <p>{text.length>0?text: "Nothing To Preview"}</p>
      </div>
    </>
  );
}
