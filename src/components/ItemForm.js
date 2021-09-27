import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
// props.onItemFormSubmit()
const [name, setName] = useState('')
const [category, setCategory] = useState('Produce')
// console.log("name:", name, "category:", category)
function submitHandler(e){
  e.preventDefault()
  const newItem = {
    id: uuid(),
    name: name, 
    category: category,
  }
  onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem">
      <label>
        Name:
        <input  value={name} onChange={e => setName(e.target.value)} type="text" name="name" />
      </label>

      <label>
        Category:
        <select  value={category} onChange={(e) => setCategory(e.target.value)} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onSubmit={submitHandler} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
