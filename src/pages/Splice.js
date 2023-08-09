 import React from 'react'

 function Splice()
 {
    const months = ['Feb', 'March', 'April', 'May'];
    console.log("Month First",months);
    // months.splice(2, 2);
    // months.splice(2, 2, "June");
    months.splice(-2, 1, 'Pascal')
    console.log("Month",months);
     return(
        <>
           <h1>Splice Array Of Element</h1>
        </>
     )
 }
 export default Splice