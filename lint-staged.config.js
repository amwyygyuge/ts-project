module.exports = {
  linters: {
    "*.{ts,tsx}": ["eslint"],
    "*.{js,jsx}": ["eslint"],
    "*.{md,html,json}": ["prettier --write", "git add"],
    "*.{css,scss,less}": ["prettier --write", "git add"],
  },
};
