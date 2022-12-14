const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  date: { type: String, required: true },
  amount: { type: String, required: true },
  category: { type: String, required: true },
  descriptions: { type: String, required: true },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
