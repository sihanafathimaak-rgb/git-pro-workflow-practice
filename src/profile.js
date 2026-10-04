function formatProfile(profile) {
  if (profile === null || typeof profile !== "object" || Array.isArray(profile)) {
    throw new TypeError("profile must be an object");
  }

  const [name, role] = ["name", "role"].map((key) => {
    const value = profile[key];
    if (typeof value !== "string" || value.trim() === "") {
      throw new TypeError(`profile.${key} must be a non-empty string`);
    }
    return value.trim();
  });

  return `${name} (${role})`;
}

module.exports = { formatProfile };
