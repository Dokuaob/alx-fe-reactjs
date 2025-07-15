import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: '#eee',
        border: '2px solid blue',
        color: 'black',
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>
        Bio: <span style={{ color: 'blue' }}>{bio}</span>
      </p>
    </div>
  );
}

export default UserProfile;
