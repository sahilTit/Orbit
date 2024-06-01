import { useState, useEffect } from "react";

const data = [
  {
    plaza_code: "22",
    name: "PUTRU",
    date_rep: "2024-02-27",
    cash_1: "1480.00",
    cash_2: "15090.00",
    monthly_pass_amount: "0.00",
    gross_cash_rec: "16570.00",
    total_fast_tag_cl: "1320045.00",
    expense_from_tp: "11014",
    total_coll: "1336615.00",
    agreed_remittance: "1312826",
    total_expense_from_ho: "0",
    margin_without_expense: "34803.00",
  },
  {
    plaza_code: "23",
    name: "PUTRU",
    date_rep: "2024-02-28",
    cash_1: "1980.00",
    cash_2: "16330.00",
    monthly_pass_amount: "0.00",
    gross_cash_rec: "18310.00",
    total_fast_tag_cl: "1370180.00",
    expense_from_tp: "33372",
    total_coll: "1388490.00",
    agreed_remittance: "1312826",
    total_expense_from_ho: "0",
    margin_without_expense: "109036.00",
  },
  {
    plaza_code: "22",
    name: "PUTRU",
    date_rep: "2024-02-29",
    cash_1: "1300.00",
    cash_2: "15630.00",
    monthly_pass_amount: "0.00",
    gross_cash_rec: "16930.00",
    total_fast_tag_cl: "1473690.00",
    expense_from_tp: "4295",
    total_coll: "1490620.00",
    agreed_remittance: "1312826",
    total_expense_from_ho: "0",
    margin_without_expense: "182089.00",
  },
  // ... more objects
];

const groupAndSumData = (data) => {
  const groupedData = data.reduce((acc, item) => {
    const key = `${item.name}_${item.plaza_code}`;
    if (!acc[key]) {
      acc[key] = {
        name: item.name,
        plaza_code: item.plaza_code,
        total_cash_1: 0,
        total_cash_2: 0,
        total_monthly_pass_amount: 0,
        total_gross_cash_rec: 0,
        total_fast_tag_cl: 0,
        total_expense_from_tp: 0,
        total_coll: 0,
        total_agreed_remittance: 0,
        total_total_expense_from_ho: 0,
        total_margin_without_expense: 0,
      };
    }

    acc[key].total_cash_1 += parseFloat(item.cash_1);
    acc[key].total_cash_2 += parseFloat(item.cash_2);
    acc[key].total_monthly_pass_amount += parseFloat(item.monthly_pass_amount);
    acc[key].total_gross_cash_rec += parseFloat(item.gross_cash_rec);
    acc[key].total_fast_tag_cl += parseFloat(item.total_fast_tag_cl);
    acc[key].total_expense_from_tp += parseFloat(item.expense_from_tp);
    acc[key].total_coll += parseFloat(item.total_coll);
    acc[key].total_agreed_remittance += parseFloat(item.agreed_remittance);
    acc[key].total_total_expense_from_ho += parseFloat(
      item.total_expense_from_ho
    );
    acc[key].total_margin_without_expense += parseFloat(
      item.margin_without_expense
    );

    return acc;
  }, {});

  return Object.values(groupedData);
};

const App = () => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    const grouped = groupAndSumData(data);
    setGroupedData(grouped);
  }, []);

  return (
    <div>
      <h1>Grouped Data with Totals</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Plaza Code</th>
            <th>Total Cash 1</th>
            <th>Total Cash 2</th>
            <th>Total Monthly Pass Amount</th>
            <th>Total Gross Cash Rec</th>
            <th>Total Fast Tag Collection</th>
            <th>Total Expense from TP</th>
            <th>Total Collection</th>
            <th>Total Agreed Remittance</th>
            <th>Total Expense from HO</th>
            <th>Total Margin without Expense</th>
          </tr>
        </thead>
        <tbody>
          {groupedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.plaza_code}</td>
              <td>{item.total_cash_1.toFixed(2)}</td>
              <td>{item.total_cash_2.toFixed(2)}</td>
              <td>{item.total_monthly_pass_amount.toFixed(2)}</td>
              <td>{item.total_gross_cash_rec.toFixed(2)}</td>
              <td>{item.total_fast_tag_cl.toFixed(2)}</td>
              <td>{item.total_expense_from_tp.toFixed(2)}</td>
              <td>{item.total_coll.toFixed(2)}</td>
              <td>{item.total_agreed_remittance.toFixed(2)}</td>
              <td>{item.total_total_expense_from_ho.toFixed(2)}</td>
              <td>{item.total_margin_without_expense.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
