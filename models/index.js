const Post = require('./Posts');
const User = require('./Users');
const Comment = require('./Comment')

// User.hasMany(Post, {
// 	foreignKey: 'user_id' 
// });

Post.belongsTo(User, {
	foreignKey: 'post_id',
	onDelete: 'SET NULL',
});
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
// })
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

module.exports = { Post, User, Comment };