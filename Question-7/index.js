const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>I Am  Happy To Learn Full Stack Web Development From PW Skill !</h1>')
    } else {
        res.end();
    }
});


server.listen(5001);


console.log("The HTTP server is running on port 5001 : ");