import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}


