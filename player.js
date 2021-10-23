class Player{
    constructor() {
        this.name=null;
         this.playerCount=0;
    }

    update(name){
        database.ref('/').update({
            name:name
            
        })
        

    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
            
        })
    }

    
}