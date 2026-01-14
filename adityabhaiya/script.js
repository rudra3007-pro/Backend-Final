const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.static('iStudio-1.0.0'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'ad@#!23@#',
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.locals.adminemail = req.session.adminmail;
  res.locals.adminname = req.session.adminname;
  res.locals.useremail = req.session.useremail;
  res.locals.username = req.session.username;
  next();
});

/* ---------- ROUTES ---------- */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/iStudio-1.0.0/index.html');
});

app.get('/Register', (req, res) => {
  res.sendFile(__dirname + '/iStudio-1.0.0/Register.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/iStudio-1.0.0/Login.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/iStudio-1.0.0/admin.html');
});

app.get('/userdashboard', (req, res) => {
  res.sendFile(__dirname + '/iStudio-1.0.0/dashboard.html');
});

app.get('/usettings', (req, res) => {
  res.render('Setting');
});

app.get('/uprofile', (req, res) => {
  res.render('Profile');
});

app.get('/umessages', (req, res) => {
  res.render('Messages');
});

app.get('/uprojects', (req, res) => {
  res.render('Projects');
});

/* ---------- AUTH ROUTES (DUMMY LOGIC) ---------- */

app.post('/regprocess', (req, res) => {
  res.send("Registration route working (DB removed)");
});

app.post('/usercheck', (req, res) => {
  req.session.useremail = req.body.email;
  req.session.username = "User";
  res.redirect('/userdashboard');
});

app.post('/admincheck', (req, res) => {
  req.session.adminmail = req.body.email;
  req.session.adminname = "Admin";
  res.redirect('/userdashboard');
});

/* ---------- LOGOUT ---------- */

app.post('/alogout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

app.post('/ulogout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin');
  });
});

/* ---------- CONTACT ---------- */

app.post('/contaprocess', (req, res) => {
  res.send('Contact form route working (DB removed)');
});

/* ---------- SERVER ---------- */

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
