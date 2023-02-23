import { getDate } from './utils';

export default class DonateRecord {
  #recordContainer;
  #date;
  #amount;

  constructor(date, amount) {
    this.#recordContainer = document.createElement('div');
    this.#recordContainer.classList.add('donate-item');

    this.#date = date;

    this.#amount = amount;
  }

  createRecord() {
    const record = `${getDate(this.#date)} - <b>${this.#amount}$</b>`;
    this.#recordContainer.innerHTML = record;
    return this.#recordContainer;
  }
}
