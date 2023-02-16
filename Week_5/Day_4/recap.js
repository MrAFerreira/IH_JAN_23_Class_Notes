// Authentication -  Who you are
// Authorization - What you can do

// Hash

let password = 'pikacHu4laife';

let salt = bcrypt.genSaltSync(10);

let hashedPassword = bcrypt.hashSync(password, salt);

let comparison = bcrypt.compareSync(password, hashedPassword);

// ... login route

res.render();
res.redirect();

req.session.user = user;

next();
