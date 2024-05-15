import { useState } from "react";
import { Form } from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";



const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    setItems ([...items, newItem])
    toast.success("item added successfully");
  };

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId  )
    setItems(newItem);
    toast.success("item deleted");
  }
  return <section className="section-center">
    <ToastContainer position='top-center' />
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem}/>
  </section>;
};

export default App;
