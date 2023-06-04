import { Customer } from "../model/Customer.js";
import { saveCustomerDB } from "../DB/db.js";

var customers_arr = [];

export class customerController {
  constructor() {
    $("#btnSave").click(this.handleSaveCustomer.bind(this));
    $("#btn-update").click(this.handleUpdateCustomer.bind(this));
    $("#btn-delete").click(this.handleDeleteCustomer.bind(this));
    this.handleLoadCustomer();
  }

  handleLoadCustomer() {
    let pre_data = localStorage.getItem(data);
    let customer_data_arr = JSON.parse(pre_data);

    $("tbody").empty();
    customer_data_arr.map((result, index) => {
      let row =
        "<tr class='row-data' >" +
        "<td>" +
        result._customer_id +
        "</td>" +
        "<td>" +
        result._customer_Name +
        "</td>" +
        "<td>" +
        result._customer_address +
        "</td>" +
        "<td>" +
        result._customer_salary +
        "</td>" +
        "</tr>";
      $("tbody").append(row);
    });
  }

  handleSaveCustomer() {
    var customer_id = $("#cusId").val();
    var customer_Name = $("#name").val();
    var customer_address = $("#address").val();
    var customer_salary = $("#salary").val();

    const regexNumber = /^\d+$/;
    if (!regexNumber.test(customer_id)) {
      alert("Invalid Id");
    }

    let new_Customer = new Customer(
      customer_id,
      customer_Name,
      customer_address,
      customer_salary
    );
    saveCustomerDB(new_Customer);
  }
  handleUpdateCustomer() {
    console.log("Update");
  }
  handleDeleteCustomer() {
    console.log("Delte");
  }
}

new customerController();

// // Table Data Set Input Field
// $("tbody").on("click", ".row-data", (event) => {
//   console.log($(event.target).closest("tr").find("td").eq(0).text());
//   console.log($(event.target).closest("tr").find("td").eq(1).text());
//   console.log($(event.target).closest("tr").find("td").eq(2).text());
//   console.log($(event.target).closest("tr").find("td").eq(3).text());

//   let cus_ID = $(event.target).closest("tr").find("td").eq(0).text();
//   let cusName = $(event.target).closest("tr").find("td").eq(1).text();
//   let cusAddress = $(event.target).closest("tr").find("td").eq(2).text();
//   let cus_Salary = $(event.target).closest("tr").find("td").eq(3).text();

//   $("#cusId").val(cus_ID);
//   $("#name").val(cusName);
//   $("#address").val(cusAddress);
//   $("#salary").val(cus_Salary);
// });

// // Update Customer Data
// $("#btn-update").on("click", (event) => {
//   let customer_Id = $("#cusId").val();
//   let pre_data = localStorage.getItem(data);
//   let customer_data_arr = JSON.parse(pre_data);
//   let index = customer_data_arr.findIndex((e) => e.customer_id === customer_Id);

//   if (index > -1) {
//     //console.log(customer_data_arr[index]);
//     customer_data_arr[index].id = $("#cusId").val();
//     customer_data_arr[index].customer_Name = $("#name").val();
//     customer_data_arr[index].customer_address = $("#address").val();
//     customer_data_arr[index].customer_salary = $("#salary").val();
//     localStorage.setItem(data, JSON.stringify(customer_data_arr));
//     loadData();
//   }
// });

// // Delete Customer Data
// $("#btn-delete").on("click", (event) => {
//   let pre_data = localStorage.getItem(data);
//   let customer_data_arr = JSON.parse(pre_data);

//   let index = customer_data_arr.findIndex(
//     (value) => value.customer_id === $("#cusId").val()
//   );
//   if (index > -1) {
//     customer_data_arr.splice(index, 1);
//     localStorage.setItem(data, JSON.stringify(customer_data_arr));
//     loadData();
//   }
// });

// // Load Customer Data Table
// function loadData() {
//   let pre_data = localStorage.getItem(data);
//   let customer_data_arr = JSON.parse(pre_data);

//   $("tbody").empty();
//   customer_data_arr.map((result, index) => {
//     let row =
//       "<tr class='row-data' >" +
//       "<td>" +
//       result.customer_id +
//       "</td>" +
//       "<td>" +
//       result.customer_Name +
//       "</td>" +
//       "<td>" +
//       result.customer_address +
//       "</td>" +
//       "<td>" +
//       result.customer_salary +
//       "</td>" +
//       "</tr>";
//     $("tbody").append(row);
//   });
// }

// // Clear Value

// // Customer Data Save
// $("#btnSave").click(function () {
//   var customer_id = $("#cusId").val();
//   var customer_Name = $("#name").val();
//   var customer_address = $("#address").val();
//   var customer_salary = $("#salary").val();

//   let pre_data = localStorage.getItem(data);

//   let data_arr = [];

//   if (pre_data) {
//     data_arr = JSON.parse(pre_data);
//   }

//   var obj = {
//     customer_id: customer_id,
//     customer_Name: customer_Name,
//     customer_address: customer_address,
//     customer_salary: customer_salary,
//   };

//   data_arr.push(obj);
//   localStorage.setItem(data, JSON.stringify(data_arr));

//   loadData();
// });

// loadData();
