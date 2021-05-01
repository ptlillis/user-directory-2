import React from "react";

function List(props) {
  return (
    <table className = "table">
      {props.result.map(result=>(
         <table style="width:100%">
         <tr>
           <th>Firstname</th>
           <th>Lastname</th>
           <th>occupation</th>
         </tr>
         <tr>
           <td>peter</td >
           <td>lillis</td>
           <td>project manager</td>
         </tr>
       </table>
      
     ))}
     
    </table>
  );
}

export default List;
