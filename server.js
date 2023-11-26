const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/homepage/homepage.html');
});

app.get('/contest', (req, res) => {
    res.sendFile(__dirname + '/public/contest/contest.html');
});

app.get('/domains', (req, res) => {
    res.sendFile(__dirname + '/public/domains/domains.html');
});

app.get('/explore', (req, res) => {
    res.sendFile(__dirname + '/public/explore/explore.html');
});

app.get('/support', (req, res) => {
    res.sendFile(__dirname + '/public/support/support.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup/signup.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login/login.html')
});


app.post('/user_details.html', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let institution = req.body.institution;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"Username": username,
                             "Email": email,
                             "Password": password,
                             "Institution": institution}, null, 3));
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, (error) => {
    if(!error)
    console.log(`http://localhost:${port}`);

    else
    console.log("Error occurred, server can't start", error);
});

