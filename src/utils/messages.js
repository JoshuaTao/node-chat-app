function generateMessage(username, text) {
  return {
    username,
    text,
    createAt: new Date().getTime(),
  };
}

function generateLocationMessage(username, url) {
  return {
    username,
    url,
    createAt: new Date().getTime(),
  };
}

module.exports = { generateMessage, generateLocationMessage };
