import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [allItems, setAllItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = allItems.filter((item) => {
    // if (selectedCategory === "All") return true;

    // return item.category === selectedCategory;
    return (selectedCategory === "All") || (item.category === selectedCategory)

  });
const updateItemsToDisplay = itemsToDisplay.filter((item) => {
   return item.name.toLowerCase().includes(search.toLowerCase())
})

function onItemFormSubmit(newItem){
console.log(allItems)
setAllItems([...items, newItem])

}
console.log(allItems, "after")
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} setSearch={setSearch}  onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {updateItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {

        }
      </ul>
    </div>
  );
}

export default ShoppingList;
