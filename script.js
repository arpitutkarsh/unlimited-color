//generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalid;
const startChangingColor = function(){
    intervalid = setInterval(changebg, 1000);
    function changebg(){
        document.querySelector('body').style.backgroundColor = randomColor();
    };
    
};
const stopChangingColor = function(){
    clearInterval(intervalid);
}
//now we need reference of start and stop button
console.log(randomColor());
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#s').addEventListener('click', stopChangingColor)