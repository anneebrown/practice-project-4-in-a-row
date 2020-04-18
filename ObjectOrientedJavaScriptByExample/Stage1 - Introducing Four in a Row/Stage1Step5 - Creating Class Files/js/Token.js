class Token {
 constructor() {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
 }

 drawHTMLToken(){
    const token = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(token);
    div.setAttribute("id", this.id);
    div.setAttribute("class", "token");
    div.style.backgroundColor = this.owner.color; 
 }

 get htmlToken(){
    return document.getElementbyId(this.id);
 }

}
