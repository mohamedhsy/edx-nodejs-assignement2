module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    
    addPost(req, res) {
        let newPost = req.body
        let id = req.store.length
        req.store.posts.push(newPost)
        res.status(201).send({id: id})
    },

    updatePost(req, res) {
        req.store[req.params.idPost] = Object.assign(req.store.posts[req.params.idPost],req.body)
        res.status(200).send(req.store.posts[req.params.idPost])
    },

    removePost(req, res) {
        req.store.posts.splice(req.params.idPost, 1)
        res.status(204).send()
    }
}