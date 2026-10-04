# AI-Assisted Conflict Review

## Branch intents

- `feature/profile-error-handling` rejects invalid profile objects and missing,
  non-string, or blank fields with clear `TypeError` messages.
- `feature/profile-refactor` trims fields through one field-driven `map`
  instead of formatting each field separately.

Both branches changed the body of `formatProfile` in `src/profile.js`.

## Conflict markers

> `<<<<<<< HEAD`
> `  if (profile === null || typeof profile !== "object" || Array.isArray(profile)) {`
> `    throw new TypeError("profile must be an object");`
> `  }`
> `  const { name, role } = profile;`
> `  if (typeof name !== "string" || name.trim() === "") {`
> `    throw new TypeError("profile.name must be a non-empty string");`
> `  }`
> `  if (typeof role !== "string" || role.trim() === "") {`
> `    throw new TypeError("profile.role must be a non-empty string");`
> `  }`
> `  return \`${name.trim()} (${role.trim()})\`;`
> `=======`
> `  const fields = ["name", "role"].map((key) => profile[key].trim());`
> `  return \`${fields[0]} (${fields[1]})\`;`
> `>>>>>>> feature/profile-refactor`

## Resolution verification

The resolved implementation first validates the profile object, then maps over
`name` and `role`. Inside the map it checks that each value is a non-empty
string before trimming it. This retains the refactored field-driven structure
without allowing missing values to fail with an unclear runtime error.

`node --test` verifies whitespace normalization, null-profile rejection, and
field-specific blank-value errors. All tests pass.

## Draft pull request

**Title:** Validate and refactor profile formatting

**Description:**

> `formatProfile` now rejects null, array, and non-object inputs with a clear
> `TypeError`, and validates that both `name` and `role` are non-empty strings.
> After validation, it trims both values through one field-driven mapping step
> before producing the profile label. Tests cover whitespace normalization,
> invalid profiles, and blank fields.
