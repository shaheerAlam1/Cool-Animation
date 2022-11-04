gsap.set(".coin",{autoAlpha:0});
var tl=gsap.timeline();
var audioplay = document.createElement('audio');
        audioplay.setAttribute('src', './coindrop.mp3');
var audioplay2 = document.createElement('audio');
        audioplay2.setAttribute('src', './coindrop2.mp3');
var audioplay3 = document.createElement('audio');
        audioplay3.setAttribute('src', './gear.mp3');

function startAnimating(){
    tl.to(".coin-donate",{duration:1, y : "20vh" ,rotation: 360,rotation:360, opacity:0,onStart:function(){audioplay.play()},} )
    tl.to(".gear",{rotation: 360,duration:3,onStart:function(){audioplay3.play()}})
    tl.to(".coin", { scale:3,duration:3, y : "40vh" ,ease:"bounce",rotation: 360,autoAlpha:1, onEnd:function(){audioplay2.play()}})
}
function reverseAnimation(){
    tl.reverse();
}
