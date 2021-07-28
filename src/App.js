import React from 'react';
import './style.css';
import React1 from './Components/React1';
import TechData from './Components/TechData';
// const TechInfo=(values)=>{
//   return(
//     <>
//   <React1
//           techname={values.techname}
//           techabout={values.techabout}
//           techread={values.techread}
//         />
//         </>
//   )

// }
export default function App() {
  return (
    <>
      <h1>frontend technologies</h1>
      <div className="container">
        {TechData.map(values => {
          return (
            <>
              <React1
                techname={values.techname}
                techabout={values.techabout}
                techread={values.techread}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
