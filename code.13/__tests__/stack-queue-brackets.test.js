"use strict";

const validateBrackets = require("../stack-queue-brackets");

describe("test", () => {
  it("validateBrackets test", () => {
    expect(validateBrackets("()")).toEqual(true);
  });
  it("validateBrackets test", () => {
    expect(validateBrackets("())")).toEqual(false);
  });

  it("check the Square Brackets", () => {
    expect(validateBrackets("[////]")).toEqual(true);
  });
  it("check the Square Brackets", () => {
    expect(validateBrackets("[[]")).toEqual(false);
  });

  it("check the Curly Brackets", () => {
    expect(validateBrackets("{}")).toEqual(true);
  });

  it("check the mix bracket 1", () => {
    expect(validateBrackets("{}(){}")).toEqual(true);
  });

  it("check the mix bracket 2", () => {
    expect(validateBrackets("(){}[[]]")).toEqual(true);
  });

  it("check the mix bracket 3", () => {
    expect(validateBrackets("{}{Code}[Fellows](())")).toEqual(true);
  });

  it("check the fail brackets 1", () => {
    expect(validateBrackets("{}{[Fellows](())")).toEqual(false);
  });

  it("check the fail brackets 2", () => {
    expect(validateBrackets("{})")).toEqual(false);
  });
});
