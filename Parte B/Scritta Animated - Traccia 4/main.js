var textDiv = $("#textDiv"),
    sentence = textDiv.html().split(""),
    tl = new TimelineMax({ repeat:10, repeatDelay:0.4, yoyo:true}); 

    
TweenLite.set(textDiv, {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});
textDiv.html("");

$.each(sentence, function(index, val) {
      if(val === " ") {
        val = "&nbsp;";     }
      var letter = $("<span/>", {id : "txt" + index}).html(val).appendTo(textDiv);
   tl.to(letter, 1, { opacity:4, autoAlpha:1, ease:Back.easeOut,  rotationX:360, transformOrigin:"50% 50% -20"}, index * 0.05);
    
});


  


