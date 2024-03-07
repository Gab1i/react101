import React, {useState} from 'react';
import './Button.css';

function Button(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Le bouton a été cliqué !");
    setCount(count + 1);
  }

  function handleMouseLeave() {
    setCount(0);
  }

  let style;
  if(count%2 == 0) {
    style = { background: 'rgb(96, 204, 230)' }
  } else {
    style = { background: 'rgb(249, 204, 193)' }
  }

  return (
    <p style={style} className="btn" onMouseLeave={handleMouseLeave} onClick={handleClick}>{props.text} (cliqué {count} fois)</p>
  );
}

export default Button;