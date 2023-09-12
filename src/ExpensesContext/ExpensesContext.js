import React, { createContext, useState, useContext } from "react";
import expensesData from "../mocks/index";

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState(expensesData);
    const [newExpenseAmount, setNewExpenseAmount] = useState("");
    const [newExpenseDate, setNewExpenseDate] = useState("");

    return (
        <ExpensesContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                expenses,
                setExpenses,
                newExpenseAmount,
                setNewExpenseAmount,
                newExpenseDate,
                setNewExpenseDate,
            }}
        >
            {children}
        </ExpensesContext.Provider>
    );
};

export const useExpensesContext = () => {
    return useContext(ExpensesContext);
};
