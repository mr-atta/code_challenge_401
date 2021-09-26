let word = [];

function hashmapRepeatedWord(str) {
  if (!str) {
    return "Empty str";
  }

  word = str.split(" ");
  // console.log(word);
  // console.log(word.length);

  let save = "";
  let j = 0;
  for (let i = 0; i < word.length; i++) {
    save = word[i];
    // console.log(word[i]);

    while (word[j]) {
      // console.log(word[j]);

      if (i != j && word[i] == word[j]) {
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return save;
      }
      j++;
    }
    j = 0;
  }

  return "dont haves the word";
}

// const str1 = "Once upon a time, there was a brave princess who...";

// console.log(hashmapRepeatedWord(str1));

module.exports = hashmapRepeatedWord;
