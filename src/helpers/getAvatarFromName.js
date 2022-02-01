// Takes a string and extracts the first letter from each word, ultimately only returning the first 1-2 (first/last name).
// Could use toUppercase on the return string to prevent lowercase avatars if that is desired.
export const getAvatarFromName = (name) => {
  const avatarRegexLetters = name.match(/\b(\w)/g); // \b matches word boundaries, (\w) matches one word character, g performs the search on the whole string instead of just the first match
  return avatarRegexLetters == null
    ? ""
    : avatarRegexLetters.join("").slice(0, 2); // return empty string if no matches, otherwise up to the first two
};
