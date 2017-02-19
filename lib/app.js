const emojis = require('emojis-list');
const randy = require('randy');

function choose (x) {
  if (x) {
    var mojis = randy.choice(emojis);

    for (var i = 1; i < x; i++) {
      mojis = mojis + randy.choice(emojis);
    }

    return mojis;
  } else {
    return randy.choice(emojis);
  }
};

module.exports = choose;