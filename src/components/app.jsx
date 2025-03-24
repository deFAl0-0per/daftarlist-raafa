import { useState } from 'react';
import Form from './form';
import GroceryList from './grocerylist';
import Footer from './footer';
import '../index.css'

const groceryItems = [];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  function Header() {
  return <h1 className='mt-[50px] mb-[50px] text-6xl' >Catatan Barang Raafa</h1>;
}

  return (
    <div className='w-full h-[400hv] m-auto grid grid-rows-[auto_auto_1fr_auto] '>
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}