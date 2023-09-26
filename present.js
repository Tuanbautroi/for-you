
var to = '🐷!';
var gift_url = 'https://www.facebook.com/nguyenbaolan1.10.20';
var gift_image_url = 'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/120195184_2811273065864515_3816484128762948893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=8PVP5WXe6tQAX_Piz3j&_nc_ht=scontent.fhan5-7.fna&oh=00_AfBFNAypTyQ2RmzTMf3F7sACoX2ZExfQ7_k7t2FWyrVBUw&oe=653A2B20';



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

