const { Post } = require('../models');

const postdata = [
	{
		title: 'Donec posuere metus vitae ipsum.',
		post_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
		user_id: 1,
	},
	{
		title: 'Morbi non quam nec dui luctus rutrum.',
		post_text: 'tempor incididunt ut labore et dolore magnsdfsdffa aliqua.',
		user_id: 1,  
	},
	{
		title:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		post_text: 'Diam vel quam elemensdfsdftum pulvinar etiam non. Porttitor leo a',
		user_id: 2,
	},
	{
		title: 'Nunc purus.',
		post_text: 'diam sollicitudin tempor. Facilisis sed odio morbi quis',
		user_id: 1,
	},
	{
		title: 'Pellentesque eget nunc.',
		post_text: 'commodo odio. Auctor elit sed vulputate mi. Venenatis a',
		user_id: 2,
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		post_text: 'condimentum vitae sapien pellentesque habitant morbi tristique',
		user_id: 2,
	},
	{
		title: 'In hac habitasse platea dictumst.',
		post_text:
			'senectus. Luctus venenatis lectus magna fringilla urna porttitor',
		user_id: 1,
	},
	{
		title: 'Morbi non quam nec dui luctus rutrum.',
		post_text:
			'rhoncus dolor. Urna nec tincidunt praesent semper feugiat. Eget',
		user_id: 2,
	},
	{
		title: 'Duis ac nibh.',
		post_text:
			'mi proin sed libero enim sed faucibus turpis in. Etiam erat velit',
		user_id: 2,
	},
	{
		title: 'Curabitur at ipsum ac tellus semper interdum.',
		post_text: 'Etiam erat velit scelerisque in dictum non consectetur.',
		user_id: 1,
	},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;