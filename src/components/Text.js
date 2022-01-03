import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("Enter Your Text Here");
  const [count, setcount] = useState(0);
  // const [btn, setbtn] = useState('primary')
  // let count = 0;
   const btn=()=>{
      if (document.body.backgroundColor==='green')
      {
        return 'success';
      }
      else{
        return 'primary';
      }
   }
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclear=()=>{
    setText("");
  }
  const handlespaces=()=>{
    let text2=text.replace(/\s+/g, ' ').trim();
    setText(text2);
  }
  const handlecopy=()=>{
    let val = document.getElementById("exampleFormControlTextarea1");
    val.select();
    navigator.clipboard.writeText(val.value);
  }
  // const setcount=(count)=>{
  //   count=count+1;
  // }
  const handlefontClick = () => {
    let font = () => {
      let val = document.getElementById("exampleFormControlTextarea1");
      val.style.fontStyle = "italic";
    };
    let font2 = () => {
      let val = document.getElementById("exampleFormControlTextarea1");
      val.style.fontStyle = "normal";
    };
    if (count % 2 == 0) {
      font();
    } else {
      font2();
    }
    setcount(count+1);

  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
      <div style={{color:props.mode==='primary'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode} mx-0.9`} onClick={handleupClick}>
          Uppercase
        </button>
        <button className={`btn btn-${props.mode} mx-3`} onClick={handleloClick}>
          Lowercase
        </button>
        <button className={`btn btn-${props.mode} mx-3`} id="btn3" onClick={handlefontClick}>
          Font-Italic
        </button>
        <button className={`btn btn-${props.mode} mx-3`} id="btn4" onClick={handleclear}>
          Clear Text
        </button>
        <button className={`btn btn-${props.mode} mx-3 `} id="btn5" onClick={handlespaces}>
          Remove extra spaces
        </button>
        <button className={`btn btn-${props.mode} mx-3`} id="btn6" onClick={handlecopy}>
          Copy Text
        </button>
      </div >
      <div className="container my-5" style={{color:props.mode==='primary'?'black':'white'}}>
        <h1 style={{color:props.mode==='primary'?'dark':'primary'}}>Text Summary</h1>
        <p>
          No of words in your text is {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} and no of
          characters are {text.length}
        </p>
      </div>
    </>
  );
}
