import React, { useState } from "react";
import "./Popup.css"
function Popup(props) {
  const [open, setOpen] = useState(false);

  const closePopup = () => {
    setOpen(false)
  }
  return (
    <>
    <button onClick={() => setOpen(true)}> Click to Open Popup</button>
    {
      open && 
      <div className="popup-container">
     <div className="popup-body">
      <h1>{props.bookTitle}</h1>
      { props.authors &&
        props.authors.map((author) => <p key={author}>{author}</p>)
      }

      { props.categorys&&
        props.categorys.map((category)=><p key={category}>{category}</p>)

      }
      <ul>
      <li>
      <button>Add item to wishlist!</button>
      </li>
      <li>
      <button onClick={closePopup}>Close X</button>
      </li>

      </ul>
     </div>
    </div>
    }
    
    </>
  );
};
export default Popup;