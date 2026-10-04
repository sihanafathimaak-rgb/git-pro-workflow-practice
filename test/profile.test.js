const assert = require("node:assert/strict");
const test = require("node:test");
const { formatProfile } = require("../src/profile");

test("formats a profile name and role", () => {
  assert.equal(
    formatProfile({ name: "Ada", role: "Engineer" }),
    "Ada (Engineer)",
  );
});

test("rejects a missing profile with a clear error", () => {
  assert.throws(() => formatProfile(null), {
    name: "TypeError",
    message: "profile must be an object",
  });
});

test("rejects blank profile fields with a clear error", () => {
  assert.throws(() => formatProfile({ name: "Ada", role: " " }), {
    name: "TypeError",
    message: "profile.role must be a non-empty string",
  });
});
