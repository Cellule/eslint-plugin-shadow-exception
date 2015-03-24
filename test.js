"use strict";

var linter = require("eslint").linter,
  ESLintTester = require("eslint-tester"),
  eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest("lib/noShadow", {
  valid: [
    "var err = null; function test(err) { return err; }",
    {
      code: "var randomName = null; function test(randomName) { var randomName = 14; return randomName; }",
      args: [2, {exceptions: {randomName: true}}],
    }
  ],

  invalid: [
    {
      code: "var v1 = null; function test(v1) { return v1; }",
      errors: [ { message: "v1 is already declared in the upper scope." } ]
    },
    {
      code: "var err = null; function test(err) { return err; }",
      args: [2, {exceptions: {err: false}}],
      errors: [ { message: "err is already declared in the upper scope." } ]
    },
    {
      code: "var randomName = null; function test(randomName) { return randomName; }",
      args: [2, {exceptions: {randomName: false}}],
      errors: [ { message: "randomName is already declared in the upper scope." } ]
    }
  ]
});
