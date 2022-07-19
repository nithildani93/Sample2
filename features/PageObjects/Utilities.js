
class Utilities {
    async highlightById(element) {
      await browser.execute((userElement) => {
        userElement.style.backgroundColor = 'red';
      }, element);
    }
  }
  export default new Utilities();