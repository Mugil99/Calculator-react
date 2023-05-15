import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let arr1=["C","/","*","-"]
let arr2=["7","8","9","+"]
let arr3=["4","5","6"]
let arr4=["1","2","3","="]
let arr5=["0",".",""]

function App() {

  let [str,setStr]=useState("");
  function getinput(e){
    setStr(str+e.target.innerText);
    console.log(str);
  }
  function Clear(){
    setStr("");
  }
  function Calculate(){
    try{
      let ans=eval(str);
      setStr(ans);
    }catch(err){
      setStr("Error");
    }
  }
  return (
    <div className="container">
    <input type="text" value={str}></input>
    <table>
      <tr>
        {arr1.map((item)=>{
          return <td onClick={item=="C"?Clear:getinput}>{item}</td>
        })}
      </tr>
      <tr>
        {arr2.map((item)=>{
          return <td onClick={getinput} rowSpan={item=="+"&& 2}>{item}</td>
        })}
      </tr>
      <tr>
        {arr3.map((item)=>{
            return <td onClick={getinput}>{item}</td>
        })}
      </tr>
      <tr>
        {arr4.map((item)=>{
          return <td onClick={item=="="?Calculate:getinput} rowSpan={item=="="&& 2}>{item}</td>
        })}
      </tr>
      <tr>
        {arr5.map((item)=>{
          return <td onClick={getinput}>{item}</td>
        })}
      </tr>
    </table>
    </div>
  );
}

export default App;
