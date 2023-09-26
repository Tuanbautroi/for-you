
var to = '🐷!';
var gift_url = 'https://www.facebook.com/nguyenbaolan1.10.20';
var gift_image_url = 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/380996014_1124269575626822_4277449062801180984_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=QM9xNruvh9sAX9wE1OS&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAitjNYGDKEwy_16hSZiNrvZMe0S4k8vJNuAMhRo2GYjg&oe=650F1624';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show')
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

