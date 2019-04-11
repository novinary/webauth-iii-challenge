const server = require('./api/server.js');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Users = require('./users-model');
const protected = require('./middleware');

const secret = 'Whats up';

function generateToken(user) {
	const payload = {
		userid: user.id,
		username: user.username,
		roles: ['admin', 'sales']
	};
	const options = {
		expiresIn: '1d'
	};
	return jwt.sign(payload, secret, options)
}

//endpoints
// [POST] /api/register
server.post('/api/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	Users.add(user)
		.then((saved) => {
			res.status(201).json(saved);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});


// [POST] /api/login
server.post('/api/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user);

				res.status(200).json({
					message: `Welcome ${user.username} we have a token!`, token
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

function checkRole(){
return function(req, res, next){
if(req.decodedToken.roles.includes(role)) {
	next();
} else {
	res.status(403).json({ message: `You need to be an ${role}`})
}
	}
}

// [GET] /api/users - protect this endpoint so only logged in users can see it 
server.get('/api/users', protected, checkRole('admin'), (req, res) => {
	Users.find('users')
		.select('id', 'username', 'department')
		.then((users) => {
			res.status(200).json({ users, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			res.send(err);
		});
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n === Running on ${port} === \n`)); 