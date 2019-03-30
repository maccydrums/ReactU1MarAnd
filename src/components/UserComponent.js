import React from 'react';

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
