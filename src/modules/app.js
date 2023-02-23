import DonateRecord from './donateRecord';

const initialState = [
  { date: new Date(2021, 6, 6, 10, 28, 49), amount: 4 },
  { date: new Date(2021, 6, 6, 10, 28, 51), amount: 8 },
  { date: new Date(2021, 6, 6, 10, 28, 54), amount: 19 },
  { date: new Date(2021, 6, 6, 10, 28, 56), amount: 25 },
  { date: new Date(2021, 6, 6, 10, 28, 57), amount: 31 },
];

export default class App {
  #donateRecordContainer;
  #donateSumContainer;
  #donateForm;
  #donateTotalSum = 0;

  constructor() {
    this.#donateRecordContainer = document.querySelector('.donates-container__donates');
    this.#donateSumContainer = document.querySelector('#total-amount');
    this.#donateForm = document.querySelector('.donate-form');
  }

  #renderTotalSum() {
    this.#donateSumContainer.textContent = `${this.#donateTotalSum}$`;
  }

  #init() {
    initialState.forEach((record) => {
      const newRecord = new DonateRecord(record.date, record.amount).createRecord();
      this.#donateRecordContainer.append(newRecord);
      this.#donateTotalSum += record.amount;
    });

    this.#renderTotalSum();
  }

  #handleNewDonate(amount) {
    const newRecord = new DonateRecord(new Date(), amount).createRecord();
    this.#donateRecordContainer.append(newRecord);

    const currentTotalSum = Number(this.#donateSumContainer.innerHTML.slice(0, -1));
    this.#donateTotalSum = currentTotalSum + Number(amount);
    this.#renderTotalSum();
  }

  run() {
    this.#init();

    this.#donateForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.#handleNewDonate(event.target.amount.value);
      event.target.elements.amount.value = '';
      event.target.elements.amount.focus();
    });
  }
}
