
var to = '🐷!';
var gift_url = 'https://www.facebook.com/nguyenbaolan1.10.20';
var gift_image_url = 'https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/380996014_1124269575626822_4277449062801180984_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=u3rkn12Gp_wAX8t0Tda&_nc_ht=scontent.fhan5-3.fna&oh=00_AfAG7fnghDIf8PuIILVPkc9NpwsytoR64xVkwNwPpwe-eQ&oe=6516FF24';



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

