function formatProfile(profile) {
  const fields = ["name", "role"].map((key) => profile[key].trim());
  return `${fields[0]} (${fields[1]})`;
}

module.exports = { formatProfile };
