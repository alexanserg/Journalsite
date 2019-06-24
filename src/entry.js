const vowels = ["a", "e", "i", "o", "u"];

export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.getWords = function () {
  let words = this.title.split(/\s+/).concat(this.body.split(/\s+/));
  console.log(words);
  return words;
};

Entry.prototype.wordCount = function () {
  return this.getWords().length;
};

Entry.prototype.vowelCount = function () {
  let characters = this.body.split("");
  let count = 0;
  characters.forEach(function(char) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  });
  return count;
};

Entry.prototype.consonantCount = function () {
  // let consonantsInBody = new Array(this.body.matchAll(/(?=[^aeiou])(?=[a-z])/i));
  // console.log(consonantsInBody);
  let characters = this.body.split("");
  let regex = /(?=[^aeiou])(?=[a-z])/i;
  let consonants = [];
  characters.forEach(function(char) {
    if (char.search(regex) != -1) {
      consonants.push(char);
    }
  });
  console.log(consonants);
  return consonants.length;
};

Entry.prototype.getTeaser = function () {
  let maxLength = 8;
  let words = this.body.split(/\s+/);
  let teaser = []
  let foundPeriod = false;
  for (var i = 0; i < maxLength && i < words.length; i++) {
    teaser.push(words[i]);
    if (words[i].includes(".")) {
      foundPeriod = true;
      break;
    }
  }
  console.log(teaser);
  if (!foundPeriod) {
    return teaser.join(" ") + " ...";
  } else {
    return teaser.join(" ");
  }
};
