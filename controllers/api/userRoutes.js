const User = require('../../models/Users');
const Post = require('../../models/Posts');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const chalk = require('chalk');

const loggedIn = (req, res, next) => {
	console.log(req.session.loggedIn, '-----------');
	if (req.session.loggedIn) {
		next();
	}
	else{
		res.redirect('/api/login')
	}
};

router.get('/login', (req, res) => {
	res.render('login');
});

router.get('/signup', (req, res) => {
	res.render('signup');
});

//dashboard
router.get('/dashboard', loggedIn, (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: ['id', 'post_text', 'title', 'created_at'],
		include: [
			{
				model: User,
				attributes: ['username'],
			},
		],
	})
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render('dashboard', { posts, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.post('/dashboard', (req, res) => {
	Post.create({
		title: req.body.title,
		post_text: req.body.text,
		user_id: req.session.user_id
	})
	.then((dbPostData) => res.json(dbPostData))
	.catch(err => res.status(500).json(err))
})

router.post('/signup', (req, res) => {
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,  
	})
		.then((dbUserData) => {
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;
				res.json(dbUserData);

				console.log(chalk.blue(dbUserData));
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/login', async (req, res) => {
	// expects {email: password:}
	const { email, password } = req.body;
	console.log(email, password);
	const user = await User.findOne({
		where: { email },
	});
	console.log(user);
	if (!user) {
		res.redirect('/api/signup');
	}

	const matchPass = await bcrypt.compare(password, user.password);

	if (!matchPass) {
		res.redirect('/api/login');
	}
	req.session.save(() => {
		req.session.user_id = user.id;
		req.session.username = user.username;
		req.session.loggedIn = true;
		res.json({ user: user.username, message: 'You are now logged in!' });
	});

	
});

router.delete('/:id', (req, res) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//logout
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});
module.exports = router;
