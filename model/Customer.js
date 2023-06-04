export class Customer {
  constructor(customer_id, customer_Name, customer_address, customer_salary) {
    this._customer_id = customer_id;
    this._customer_Name = customer_Name;
    this._customer_address = customer_address;
    this._customer_salary = customer_salary;
  }
  get customer_id() {
    return _customer_id;
  }
  set customer_id(customer_id) {
    this._customer_id = customer_id;
  }
  get customer_Name() {
    return _customer_Name;
  }
  set customer_Name(customer_Name) {
    this._customer_Name = customer_Name;
  }
  get customer_address() {
    return _customer_Name;
  }
  set customer_address(customer_address) {
    this._customer_address = customer_address;
  }
  get customer_salary() {
    return _customer_salary;
  }
  set customer_salary(customer_salary) {
    this._customer_salary = customer_salary;
  }
}
