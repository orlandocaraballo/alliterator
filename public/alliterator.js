function Alliterator() {
  this.names = {
    "a": "andy",
    "b": "barry",
    "c": "conny",
    "d": "daniel",
    "e": "eddie",
    "f": "frank",
    "g": "gary",
    "h": "herbert",
    "i": "ingrid",
    "j": "jacob",
    "k": "kasey",
    "l": "larry",
    "m": "matthew",
    "n": "nancy",
    "o": "orlando",
    "p": "Pa--trisha",
    "q": "quentin",
    "r": "ronny",
    "s": "sammy",
    "t": "todd",
    "u": "uma",
    "v": "veronica",
    "w": "wally",
    "x": "xavier",
    "y": "yolanda",
    "z": "zachary"
  }
}

Alliterator.prototype.chooseName = function(text) {
  return this.names[text.charAt(0)]
};

Alliterator.prototype.nameIt = function(text) {
  return text + " " + this.chooseName(text)
};