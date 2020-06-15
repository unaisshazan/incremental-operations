import React,{useState} from 'react';
import './App.css';
import Message from './components/Mess';
import Button from '@material-ui/core/Button';


export default function App() {
  let [count,setcount]= useState(1);
  let [isMorning,setMorning]=useState(true)

  return (
    <div className={` box ${isMorning ? 'dayLight' : ''} `}>
<h1> Day time ={isMorning ? 'Morning': 'night'}</h1>
    <Message counter={count}/>

 <Button  variant="contained" color="secondary" onClick={()=> setcount(++count)}> update count </Button> 
    <Button variant="contained" color="primary" onClick={()=>setMorning(!isMorning)}> update day </Button>
    </div>
  );
}


