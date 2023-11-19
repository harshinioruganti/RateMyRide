import React from 'react';

const ProfilePicture = ({ initials }) => {
    return (
        <div className="profile-picture-frame">
          <div className="profile-picture-circle">
            <span>{initials}</span>
          </div>
        </div>
    );
};

export default ProfilePicture;
