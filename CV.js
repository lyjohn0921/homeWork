function start()
{
  var now = document.getElementById("now");
  now.innerHTML = Date(document.lastModified);
}

function sw()
{
var x = "im1.jpg";
var y = "im2.jpg";
  var z = document.getElementById("picture");
  console.log(picture);
  if(z.getAttribute('src')==x){
    z.setAttribute('src',y)
  }
  else
  {
    z.setAttribute('src',x)
  }
}
