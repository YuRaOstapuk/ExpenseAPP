import React, { useState } from "react";
import expensesData from "../../mocks/index";
import { SelectContainer } from "./index.style";
import {useExpensesContext} from "../../ExpensesContext/ExpensesContext";


const SelectCategory = ({ onChange }) => {
    const categories = [...new Set(expensesData.map((item) => item.category))];
    const {
        selectedCategory,
        setSelectedCategory,
    } = useExpensesContext();

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setSelectedCategory(newCategory);
        onChange(newCategory);
    };

    return (
        <SelectContainer value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Выберите категорию</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </SelectContainer>
    );
};
export default SelectCategory;


