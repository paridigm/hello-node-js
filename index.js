// index.js

// current tutorial: https://blog.risingstack.com/your-first-node-js-http-server/

// next tutorial:  http://socket.io/get-started/chat/

// as far as I am aware, this is all server side stuff...

/*
Try this later:
Uses a sightly different version of node.js
https://www.youtube.com/watch?v=CxmEzRTKduE
*/

require('./app/index')
//require('./server/index')  // different server. throws error when 2 servers try to run at the same time

require('./views/index')
