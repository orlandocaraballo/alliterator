function toggleClasses(inputSelector, paragraphSelector, anchorSelector) {
  $(inputSelector).toggleClass("hidden")
  $(paragraphSelector).toggleClass("hidden")
  $(anchorSelector).toggleClass("hidden")
}

function transitionWords(text) {
  $("p span").html(text)
}

function chooser(text) {
  if(text == "poartlrainsdhoa") {
    transitionWords("ohh... its you.... welcome")
    toggleClasses("input", "p")

    setTimeout(function(){
      window.location.href = ANNIVERSARY_PATH
    }, 3000)
  } else {
    var alliterator = new Alliterator()
    transitionWords(alliterator.nameIt(text))
    toggleClasses("input", "p", "a")
  }
}

function show($element) {
  $element.removeClass("hidden")
}

function showSection($section) {
  show($section.find(".wrapper"))
  show($section.find(".arrow"))
  show($section.find(".background"))
}

$(document).ready(function(){
  var $sections = $("section")
  var $firstSection = $sections.first()
  var $firstPassage = $firstSection.find(".passage")

  setTimeout(function(){
    show($firstSection.find(".wrapper"))
    show($firstSection.find(".arrow"))
  })

  $("input").on("keypress", function(event){
    if(event.keyCode == 13) {
      var inputText = $(this).val().toLowerCase()

      chooser(inputText)
    }
  })

  $(document).on("scroll", function(event){
    $sections.each(function(index){
      if(index != 0 && $(window).scrollTop() >= $(this).offset().top) {
        showSection($(this))
      }
    })
  })

  $("section:not(:last)").find("a").on("click", function(event){
    event.preventDefault()
    var $nextSection = $(this).closest("section").next()

    // console.log($nextSection.offset().top + "px"))

    $("html, body").animate({
      scrollTop: $nextSection.offset().top + "px"
    }, 500, function(){
      showSection($nextSection)
    })
  })

  $("section:last").find("a").on("click", function(event){
    event.preventDefault()

    $firstPassage.text("HAPPY ANNIVERSARY!")
    $firstPassage.css("font-size", "")
    $("body").addClass("before-final")
    $firstSection.find(".arrow").addClass("hidden")

    $("html, body").animate({
      scrollTop: 0
    }, 5000, function(){
      // $sections.filter("section:not(:first)").hide()
      $firstSection.find(".background").removeClass("hidden")
      $("body").addClass("after-final")
      // $firstSection.find(".arrow").addClass("hidden")
    })
  })
})