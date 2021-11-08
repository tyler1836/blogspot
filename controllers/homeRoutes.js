const router = require('express').Router();
const {Post, User, Comment} = require('../models')


router.get('/', (req, res) => {
  Post.findAll({ 
    // attributes: ['id', 'post_text', 'title'],
    include: [
      User,
      Comment
        // attributes: ['comment_text']
      
    ]
  }).then((dbPostData) => {
    // console.log(dbPostData[4].Comments)
    let posts = dbPostData.map((post) => post.get({plain: true}))
    console.log(posts[0].Comments)
    // posts.forEach(comment => {
    //   JSON.stringify(comment);
    //   posts++
    //   if (posts === 5){
    //     return;
    //   }
      
    // });
    console.log(posts)
    res.render('home', {posts})
  }).catch((err) => {
    console.log(err, 'error in home route')
    res.status(500).json(err)
  })
    
});

router.post('/logout', (req, res) =>{
    if(req.session.loggedIn){
      req.session.destroy(()=>{
        res.status(204).end();
      });
    }
    else{
      res.status(404).end();
    }

    res.redirect('home')
  });

module.exports = router;