const assert = require("node:assert/strict");
const test = require("node:test");
const { formatGreeting } = require("../src/greeting");

test("formats a greeting using the trimmed name", () => {
  assert.equal(formatGreeting("  Git learner  "), "Hello, Git learner!");
});

test("rejects a blank name", () => {
  assert.throws(() => formatGreeting("  "), {
    name: "TypeError",
    message: "name must be a non-empty string",
  });
});

test("formats an uppercase greeting", () => {
  assert.equal(
    formatGreeting("Git learner", "uppercase"),
    "HELLO, GIT LEARNER!",
  );
});

test("rejects an unsupported greeting style", () => {
  assert.throws(() => formatGreeting("Git learner", "casual"), {
    name: "TypeError",
    message: 'style must be "standard" or "uppercase"',
  });
});
