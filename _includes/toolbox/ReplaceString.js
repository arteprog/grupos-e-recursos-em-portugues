	function replaceString(initialString, finalString, target) {
    if(!target) {
      var watch = selectAll(".replaceString");
    } else {
      var watch = selectAll(target);
    }
    for (var i = 0; i < watch.length; i++) {
     var target = watch[i].html();
     var targetResult = target.replaceAll(initialString, finalString);
     watch[i].html(targetResult, false);
   }
 }