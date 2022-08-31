export default class LoadMoreBtnApi {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    return refs;
    
  }

  enable() {
    this.refs.button.disabled = false;
    // console.log(this)
  }

  disable() {
    this.refs.button.disabled = true;
    // console.log(this)
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
    // console.log(this)
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
    // console.log(this)
  }
}