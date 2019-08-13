import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense( '123abc', { note: "New Note Value" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: "New Note Value"
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 116500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense action object with default values', () => {
    // Call addExpense with no data
    // Assert the value of the return object
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
