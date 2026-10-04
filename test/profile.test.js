const assert = require("node:assert/strict");
const test = require("node:test");
const { formatProfile } = require("../src/profile");

test("formats a profile name and role", () => {
  assert.equal(
    formatProfile({ name: "  Ada ", role: " Engineer  " }),
    "Ada (Engineer)",
  );
});
