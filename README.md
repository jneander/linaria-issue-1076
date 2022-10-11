# Linaria/Webpack Issue of Outdated Build

For more details see https://github.com/callstack/linaria/issues/1077.

1. Run `npm install`.
2. Run `npm run start`.

3. Change `'red'` to `'blue'` in `src/tokens.js`.
4. Notice that webpack dev server rebuilds.
5. Notice that the text color on the page did not change.
6. Refresh the page and again notice no change.

7. Save `styles.css.js` without making changes.
8. Notice that the text color on the page has changed.
