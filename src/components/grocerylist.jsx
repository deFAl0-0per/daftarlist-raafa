import { useState } from 'react';
import Item from './item';
import '../index.css'
import myPoto from './img/poto_rapacool1_rb.png'

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  switch (sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className='list h-[300px] text-[#00000] pt-9 flex flex-col items-center justify-between gap-8 overflow-y-scroll'>
        <ul className='list-none w-4/5 flex flex-col items-center' >
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
          ))}
        </ul>
      </div>
      <div className='mypoto' ></div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button className='xl:w-[180px] w-[330px]' onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}