import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="rapport.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Saisir En Format PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;