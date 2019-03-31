import React from 'react';

//funktion som tar emot users och color som props och renderar en li-tagg för varje namn som tas emot från vår lista med namn. Kollar även state på color och renderar antingen en svart eller röd färg.
function UserComponent(props) {

  let users = props.users;
  let color = props.color;
  const colorOne = '#000000';
  const colorTwo = '#ff0000';

  return (
    <ul style = {{padding: 0}}>
      {users.map((userName, i) =>
        <li key={i} className ="list-group-item" style = {{color: color ? colorOne : colorTwo}}>
        {userName}
        </li>
      )}
    </ul>
  )
}

export default UserComponent;
