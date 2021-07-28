import React from 'react';
const React1=(props)=>{
  console.log(props)
  const {techname,techabout,techread}=props;
return(
  <>
  <div className="cards">
     
     <h2>{techname}</h2>
   
      <p>{techabout}</p>
      <button>{techread}</button>
      <hr/>
    
    </div>
    </>
)
}
export default React1;