function toggleClasses(inputSelector, paragraphSelector, anchorSelector) {
  $(inputSelector).toggleClass("hidden")
  $(paragraphSelector).toggleClass("hidden")
  $(anchorSelector).toggleClass("hidden")
}

$(document).ready(function(){
  var alliterator = new Alliterator()

  $("input").on("keypress", function(event){
    if(event.keyCode == 13) {
      var inputText = $(this).val().toLowerCase()

      $("p").html(alliterator.nameIt(inputText))
      toggleClasses(this, "p", "a")
    }
  })
})