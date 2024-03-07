import React, {useState} from 'react';
import './Input.css';

function Input() {
  const [value, setValue] = useState(0);

  function handleChange(event) {
    setValue(event.target.value);
  }

  let style;
  let error = "";
  if(value.length == 0) {
    style = { border: 'solid 2px grey' }
    error = "Entrez un mot de passe";
  } else if (value.length > 0 && value == "password") {
    style = { border: 'solid 2px green' }
    error = "";
  } else {
    style = { border: 'solid 2px red' }
    error = "Mot de passe incorrect";
  }

  return (
    <>
      <input style={style} type="text" onChange={handleChange} />
      <p>{error}</p>
    </>
  );
}

export default Input;