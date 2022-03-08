const http = require('http');
const server = http.createServer(()=>{
    console.log('succset');
});
 const P0RT = 3001;
server.listen(PORT,() => {
    console.log("server is running port",P0RT);
})
