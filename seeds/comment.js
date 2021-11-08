const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment_text: 'This is the first comment on the first post',
        post_id: 1
    },
    {
        id: 2, 
        comment_text: 'This is the first comment on the second post',
        post_id: 2
    },
    {
        id: 3, 
        comment_text: 'This is the first comment on the third post',
        post_id: 3
    },
    {
        id: 4, 
        comment_text: 'This is the first comment on the fourth post',
        post_id: 4
    },
    {
        id: 5, 
        comment_text: 'This is the first comment on the fifth post',
        post_id: 5
    }

]
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;