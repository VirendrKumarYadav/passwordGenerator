import {useState} from 'react';
import {useRef} from 'react';
import './App.css';


function App() {

  let [pass, setPass]=useState("");
 const ref=useRef(null);
  let test=(arg)=>{
    setPass(arg);
  }
  
 let generatePass=()=>{
  
  let string=getRandomStringUppercase()+
            getRandomStringLower()+
            getRandomStringLower()+
            getRandomStringLower()+
            getRandomStringLower()+
            getRandomStringNum()+
            getRandomStringNum()+
            getRandomStringSpl()
   setPass(string);
 };

  return (
    
    <div className="App">

    <h1>Password Generator</h1>
     <div>
      <lebel><input type="checkbox" checked></input> : Special Char</lebel>
      <lebel><input type="checkbox" checked></input> : Uppercase Char</lebel>
      <lebel><input type="checkbox" checked></input> : Number Char</lebel>
     </div>
    
     <div>
     <button onClick={generatePass}>Generate Password</button>
     </div>
     <p id="password">{pass}</p>
    </div>
  );
}

export default App;
function getRandomStringUppercase() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
    // for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    // }
 
    return pass;
}
function getRandomStringLower() {
    let pass = '';
    let str ='abcdefghijklmnopqrstuvwxyz';
 
    // for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    // }
 
    return pass;
}
function getRandomStringNum() {
    let pass = '';
    let str = '0123456789';
 
    // for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    // }
    return pass;
}

function getRandomStringSpl() {
    let pass = '';
    let str = '!@#$&*%?{}()+-=?@[]';
 
    // for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    // }
    return pass;
}