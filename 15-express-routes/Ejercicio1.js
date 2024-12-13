const express = require ('expres');


const server= express();



server.get(' /header' , (req, res) =>   {

          const { token } = req.headers;


          if (!token) {
               
               return res.status(401).json({
                   code: 401,
                   error: 'Unauthorized',
                   message: 'Error: Set a token to login',
               });
           }




})