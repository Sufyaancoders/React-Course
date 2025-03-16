import React from "react";
import { data } from "./data";
 
const Filter = ({filterdata}) => {
  return (
    <div>
     
      
        {filterdata.map((item) => {
         return( <button>
              {item.title}
          </button>)
})}
     
    </div>
  );
}
export default Filter;