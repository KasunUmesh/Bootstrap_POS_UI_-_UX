const data = "DATA";

export function saveCustomerDB(new_customer) {
  let pre_data = localStorage.getItem(data);

  let data_arr = [];

  if (pre_data) {
    data_arr = JSON.parse(pre_data);
  }

  data_arr.push(new_customer);
  localStorage.setItem(data, JSON.stringify(data_arr));
}
