const hashmapRepeatedWord = require("../hashmap-repeated-word");

describe("test hashmapRepeatedWord", () => {
  it("sho", () => {
    //arrange
    const str1 = "On a the a wh";
    const str2 =
      "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I doing in New York...";
    const str3 = "Once upon a time, there was a brave princess who...";
    const str4 = "Once upon time, there was a brave princess who...";

    //act

    //assert
    expect(hashmapRepeatedWord(str1)).toEqual("a");
    expect(hashmapRepeatedWord(str2)).toEqual("summer");
    expect(hashmapRepeatedWord(str3)).toEqual("a");
    expect(hashmapRepeatedWord(str4)).toEqual("dont haves the word");
  });
});
