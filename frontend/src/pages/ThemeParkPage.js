import React, { useState } from 'react';
import { Accordion, Card, Button, Modal } from 'react-bootstrap';

import ThemeParkList from '../components/ThemeParkList.js';
import Header from '../components/Header.js';

const ThemeParkPage = () => {
 return (
  <>
    <Header />
    <ThemeParkList />
  </>
 )
};

export default ThemeParkPage;
