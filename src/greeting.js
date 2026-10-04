function formatGreeting(name, style = "standard") {
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("name must be a non-empty string");
  }
  if (style !== "standard" && style !== "uppercase") {
    throw new TypeError('style must be "standard" or "uppercase"');
  }

  const greeting = `Hello, ${name.trim()}!`;
  return style === "uppercase" ? greeting.toUpperCase() : greeting;
}

module.exports = { formatGreeting };
