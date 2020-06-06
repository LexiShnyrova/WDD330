export default class Comments {
    // property
    commentList = []
    type = 'hike'

    // constructor
    constructor() {
        this.load()
        this.renderCommentList()
    }
    // methods
    save() {
        localStorage.setItem('commentList', JSON.stringify(this.commentList))
    }
    load() {
        let storeList = localStorage.getItem('commentList')
        if (storeList)
            this.commentList = JSON.parse(storeList)
    }
    getAllComments() {
        return this.commentList
    }
    renderCommentList() {
        let parent = document.getElementById('comment-list')
        parent.innerHTML = ''
        for (let comments of this.commentList) {
            parent.innerHTML += `<p>${comments.content}</p>`
        }
    }
    renderOneHikeComments(id) {
        let parent = document.getElementById('comments')
        parent.innerHTML = ''
        for (let comments of this.commentList) {
            if (id == comments.id) {
                parent.innerHTML += `<p>${comments.content}</p>`
            }
        }
    }
    addComment(id, content) {
        this.commentList.push({ id, content })
        this.save()
    }
}