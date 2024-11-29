import { useEffect,useState } from "react";


function Watch(){
const [time,settime] = useState(0);
const [running,setrunning] = useState(false);

useEffect(()=>{
    let interval;
    if(running){
       interval = setInterval(() => {
            settime((prevtime)=> prevtime +10)
        }, 10);
    }else if(!running){
        clearInterval(interval);
    }
    return ()=> clearInterval(interval);
},[running])



    return(
        <>
        <div>stopwatch 1</div>
        <div>
            <span>{("0" + Math.floor((time / 60000) %60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) %60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 10) %100)).slice(-2)}</span>
           
        </div>
        
        <div>
            {running ? (<button onClick={()=>{setrunning(false)}}>stop</button>):(<button onClick={()=>{setrunning(true)}}>start</button>)}
            
            
            <button onClick={()=>{settime(0)}}>reset</button>
        </div>
        </>
    )
}

export default Watch;