const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')
const routes = require('./routes')

let store = {
    posts: [
        {name: 'Top 10 ES6 Features every Web Developer must know',
        url: 'https://webapplog.com/es6',
        text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
        comments: [
            {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
            {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
            {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}      
      ]
      }
    ]
}

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:idPost', routes.posts.updatePost)
app.delete('/posts/:idPost', routes.posts.removePost)

app.get('/posts/:idPost/comments', routes.comments.getComments)
app.post('/posts/:idPost/comments', routes.comments.addComment)
app.put('/posts/:idPost/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:idPost/comments/:commentId', routes.comments.removeComment)

app.listen(3000)