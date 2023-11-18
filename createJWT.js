const jwt = require("jsonwebtoken");
require("dotenv").config();
const crypto = require('crypto');

exports.createToken = function ( fn, ln, id )
{
    return _createToken( fn, ln, id );
}
_createToken = function ( fn, ln, id )
{
    try
    {
      const expiration = new Date();
      const user = {id:id,firstName:fn,lastName:ln};
      secret = crypto.randomBytes(64).toString('hex');
      const accessToken =  jwt.sign( user, secret);
      // In order to expire with a value other than the default, use the 
       // following
      /*
      const accessToken= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, 
         { expiresIn: '30m'} );
                       '24h'
                      '365d'
      */
      var ret = {accessToken:accessToken,firstName:fn,lastName:ln,id:id};    
    }

    catch(e)
    {
      var ret = {error:e.message};
    }

    return ret;
}

exports.isExpired = function( token )
{
   var isError = jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, 
     (err, verifiedJwt) =>
   {
     if( err )
     {
       return true;
     }
     else
     {
       return false;
     }
   });
   return isError;
}
exports.refresh = function( token )
{
  let ud = jwt.decode(token,{complete:true});
  let id = ud.payload.id;
  let fn = ud.payload.firstName;
  let ln = ud.payload.lastName;
  return _createToken( fn, ln, id );
}