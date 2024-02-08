// formatName.js
export function formatName(name) {
  // capitalizes every word in project name
  return name
    .trim()
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
