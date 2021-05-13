import React from "react";

function Main({ children, ...rest }) {
  //const {children} = props;
  //return <main children />;
  return <main {...rest}>{children} </main>;
}

export default Main;
