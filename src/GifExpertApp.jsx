import { useState } from "react";
import { AddCategory } from "./components/AddCateogry";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* Input*/}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};
