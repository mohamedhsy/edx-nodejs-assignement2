module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.idPost].comments)
    },
    
    addComment(req, res) {
        let newComment = req.body
        let id = req.store.posts[req.params.idPost].comments.length
        req.store.posts[req.params.idPost].comments.push(newComment)
        res.status(201).send({id: id})
    },

    updateComment(req, res) {
        req.store.posts[req.params.idPost].comments[req.params.commentId] = Object.assign(req.store.posts[req.params.idPost].comments[req.params.commentId], req.body)
        res.status(200).send(req.store.posts[req.params.idPost].comments[req.params.commentId])
    },

    removeComment(req, res) {
        req.store.posts[req.params.idPost].comments.splice(req.params.commentId)
        res.status(204).send()
    }
}