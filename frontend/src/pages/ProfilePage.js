import React, { useEffect, useState } from 'react';

import Header from '../components/Header.js';
import LoggedInName from '../components/LoggedInName.js';
import Profile from '../components/Profile.js';

const ProfilePage = () => {
  return (
   <>
     <Header />
     <LoggedInName />
     <Profile />
   </>
  )
 };

export default ProfilePage;
