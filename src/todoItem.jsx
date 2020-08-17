import React, { useState } from "react";

function Items(props) {
  // const [isDone, setClick] = useState(false);

  // function clicking() {
  //   setClick(!isDone);
  // }

  return (
    <div>
      <li
        // style={{ textDecoration: isDone ? "line-through" : "none" }}
        onDoubleClick={() => {
          // setClick(!isDone);
          props.delt(props.item);
        }}
      >
        {props.item}
      </li>
      {/* <button>{props.item}</button> */}
    </div>
  );
}

export default Items;
