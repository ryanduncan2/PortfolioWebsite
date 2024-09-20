// import fs from 'fs';
// import http from 'http';
// import https from 'https'
import express from 'express';
import cors from 'cors';

// var privateKey = fs.readFileSync('privatekey.key', 'utf8');
// var certificate = fs.readFileSync('certificate.crt', 'utf8');
// var credentials = { key: privateKey, cert: certificate };

const app = express();

app.use(cors());
app.use(express.static('public', { extensions:['html'] }));

app.listen(8080, () =>
{
    console.log("Listening on port 8080.");
});

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080);
// httpsServer.listen(8443);
