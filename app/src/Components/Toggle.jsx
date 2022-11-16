import React, { useState } from 'react'
import { useEffect } from 'react'
const Toggle = () => {
  const [theam, setTheam] = useState("light-theam")
  const ToggleThem=()=>{
    if(theam==="dark-theam"){
      setTheam("light-theam")
    }
    else{
      setTheam("dark-theam")
    }
    
  }

  useEffect(() => {
   document.body.className=theam;
  }, [theam])
  return (
    <div >

         <button onClick={()=>ToggleThem()}>Toggle</button>
    </div>
  )
}

export default Toggle