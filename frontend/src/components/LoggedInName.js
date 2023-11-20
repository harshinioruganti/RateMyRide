import React from 'react';
import './LoggedInName.css';

function LoggedInName()
{
	
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    const doLogout = event => 
    {
	    event.preventDefault();

        localStorage.removeItem("user_data")
        window.location.href = '/';

    };    

  return(
   <div id="loggedInDiv" className="logged-in-header">
      <br/>
      <br/>
      <span id="userName">Logged In As {firstName} {lastName}</span><br />
      {/* <button type="button" id="logoutButton" Class = 'buttons'
        onClick={doLogout}> Log Out </button> */}
   </div>
  );

};


export default LoggedInName;
