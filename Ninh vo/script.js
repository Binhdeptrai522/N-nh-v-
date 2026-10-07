function yesLove(){
    const answer=document.getElementById("answer");
    answer.textContent="Anh biết mà 😌❤️ Anh cũng yêu em rất nhiều!";
    for(let i=0;i<15;i++) setTimeout(createHeart,i*100);
}
function moveNoButton(){
    const button=document.getElementById("noButton");
    const card=document.querySelector(".question-card");
    const maxX=card.clientWidth-button.offsetWidth-30;
    const maxY=card.clientHeight-button.offsetHeight-30;
    button.style.position="absolute";
    button.style.left=Math.max(10,Math.random()*maxX)+"px";
    button.style.top=Math.max(10,Math.random()*maxY)+"px";
}
function createHeart(){
    const heart=document.createElement("div");
    heart.textContent="❤️";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-30px";
    heart.style.fontSize=(15+Math.random()*25)+"px";
    heart.style.zIndex="999";
    heart.style.pointerEvents="none";
    heart.style.animation="floatHeart 6s linear forwards";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}
const style=document.createElement("style");
style.textContent="@keyframes floatHeart{from{transform:translateY(0);opacity:1}to{transform:translateY(-110vh) rotate(360deg);opacity:0}}";
document.head.appendChild(style);
