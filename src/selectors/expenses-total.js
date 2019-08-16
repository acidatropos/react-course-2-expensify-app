// export default (expenses) => {
//     let total = 0;
//     if(expenses.length > 0){
//         for(let i = 0; i < expenses.length; ++i){
//             total += expenses[i].amount;
//         }
//         return total;
//     }
//     return 0;
// };

export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};
