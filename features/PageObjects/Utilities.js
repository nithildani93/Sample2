class Utilities {
  async highlightById(element) {
    await browser.execute((arg) => {
      document.querySelector(arg).style.backgroundColor = 'red';
    }, element);
  }
}
export default new Utilities();
