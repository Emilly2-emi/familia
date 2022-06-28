var images = [ "f.jpg", 
"a.jpg", 
"m.webp", 
"i.webp", 
"l.jpg",
  ]; var i = 0; 
function nextslide() { if(i == 5) { i=0; }
 document.getElementById("album").src = images[i]; i++; }