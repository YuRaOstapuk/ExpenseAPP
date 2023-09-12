import React, { useState } from "react";
import { LeftSide, PageContainer, RightSide, Wrapper } from "./index.style";
import SelectCategory from "../../components/select/index";
import { InterestingButton } from "../../components/button/index";
import { InterestingInput } from "../../components/input/index";
import { useExpensesContext } from "../../ExpensesContext/ExpensesContext";

const ExpensesTracker = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    expenses,
    setExpenses,
    newExpenseAmount,
    setNewExpenseAmount,
    newExpenseDate,
    setNewExpenseDate,
  } = useExpensesContext();

  const [sortType, setSortType] = useState("alphabetical");
  const [currencyView, setCurrencyView] = useState("rubles");

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const handleCurrencyChange = (currency) => {
    setCurrencyView(currency);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddExpense = () => {
    if (selectedCategory && newExpenseAmount && newExpenseDate) {
      try {
        const amount = parseFloat(newExpenseAmount);
        if (isNaN(amount)) {
          throw new Error("Сумма должна быть числом");
        }
        const newExpense = {
          id: expenses.length + 1,
          category: selectedCategory,
          amount,
          date: newExpenseDate,
        };

        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        setNewExpenseAmount("");
        setNewExpenseDate("");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  let sortedExpenses = [...expenses];
  if (sortType === "alphabetical") {
    sortedExpenses.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortType === "date") {
    sortedExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortType === "amount") {
    sortedExpenses.sort((a, b) => a.amount - b.amount);
  }

  const filteredExpenses = sortedExpenses.filter((expense) =>
    selectedCategory ? expense.category === selectedCategory : true
  );

  const centerStyle = {
    textAlign: "center",
  };

  return (
    <PageContainer>
      <Wrapper>
        <LeftSide>
          <h2 style={{ ...centerStyle, margin: "20px 0 15px 0" }}>Категории</h2>
          <SelectCategory size="s" onChange={handleCategoryChange} />
        </LeftSide>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f1f1f1",
            padding: "0 10px",
            justifyContent: "center",
          }}
        >
          <h2 style={{ ...centerStyle, margin: "10px 0 15px 0" }}>
            Добавить расход
          </h2>
          <InterestingInput
            type="number"
            placeholder="Сумма"
            value={newExpenseAmount}
            onChange={(e) => setNewExpenseAmount(e.target.value)}
          />
          <InterestingInput
            type="date"
            placeholder="дата"
            value={newExpenseDate}
            onChange={(e) => setNewExpenseDate(e.target.value)}
          />
          <InterestingButton size="s" onClick={handleAddExpense}>
            Добавить
          </InterestingButton>
        </div>
        <RightSide>
          <h2 style={{ ...centerStyle, margin: "10px 0 15px 0" }}>
            Траты по категории: {selectedCategory}
          </h2>
          <div style={{ marginBottom: "10px" }}>
            <InterestingButton
              size="s"
              onClick={() => handleSortChange("alphabetical")}
            >
              Сортировать по алфавиту
            </InterestingButton>
            <InterestingButton
              size="s"
              onClick={() => handleSortChange("date")}
            >
              Сортировать по дате
            </InterestingButton>
            <InterestingButton
              size="s"
              onClick={() => handleSortChange("amount")}
            >
              Сортировать по стоимости
            </InterestingButton>
            <InterestingButton
              size="s"
              onClick={() => handleCurrencyChange("rubles")}
            >
              Отображать в рублях
            </InterestingButton>
            <InterestingButton
              size="s"
              onClick={() => handleCurrencyChange("percent")}
            >
              Отображать в процентах
            </InterestingButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "380px",
              overflowY: "auto",
            }}
          >
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                style={{
                  width: "calc(100% - 30px)",
                  backgroundColor: "#fff",
                  border: "solid 1px #ccc",
                  borderRadius: "8px",
                  padding: "0 10px 10px 10px",
                  marginBottom: "10px",
                }}
              >
                <p style={{ margin: "15px 0 5px" }}>
                  <b>Дата:</b> {expense.date}
                </p>
                <p style={{ margin: "10px 0 5px" }}>
                  <b>Сумма:</b>{" "}
                  {currencyView === "rubles"
                    ? `${expense.amount} руб.`
                    : `${(expense.amount / 100).toFixed(2)} %`}
                </p>
                <p style={{ margin: "10px 0 15px" }}>
                  <b>Категория:</b> {expense.category}
                </p>
                <InterestingButton
                  size="s"
                  onClick={() => handleDeleteExpense(expense.id)}
                >
                  Удалить
                </InterestingButton>
              </div>
            ))}
          </div>
        </RightSide>
      </Wrapper>
    </PageContainer>
  );
};

export default ExpensesTracker;
