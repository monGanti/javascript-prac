

export default class Likes {
    constructor(){
        this.likes = [];
    }

    addLike(id,title,author,img){
        const likesList = {
            id,
            title,
            author,
            img
        }
        this.likes.push(likesList);

        //Persist data in localStorage
        this.persistData();

        return likesList;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index,1);

        //Persist data in localStorage
        this.persistData();
    }

    isLiked(id){
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes(){
        return this.likes.length;
    }

    persistData(){
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('likes'));

        //Restoring from localStorage
        if(storage) this.likes = storage;
    }

    

}