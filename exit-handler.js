function exit() {
  process.exit(0);
}

module.exports = {
  handleCtrlC: function() {
    process.once('SIGINT', exit);
  }
}
