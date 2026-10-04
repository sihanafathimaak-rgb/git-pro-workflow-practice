function formatProfile(profile) {
  if (profile === null || typeof profile !== "object" || Array.isArray(profile)) {
    throw new TypeError("profile must be an object");
  }

  const { name, role } = profile;
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("profile.name must be a non-empty string");
  }
  if (typeof role !== "string" || role.trim() === "") {
    throw new TypeError("profile.role must be a non-empty string");
  }

  return `${name.trim()} (${role.trim()})`;
}

module.exports = { formatProfile };
