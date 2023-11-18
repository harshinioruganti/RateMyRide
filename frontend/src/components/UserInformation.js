import React from 'react';

const UserInformation = ({ firstName, lastName }) => {
  return (
    <div className="user-info">
      <h2>{`${firstName} ${lastName}`}</h2>
      {/* Add additional user information elements or styles */}
    </div>
  );
};

export default UserInformation;
