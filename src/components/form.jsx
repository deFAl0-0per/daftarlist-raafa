import { useState } from 'react';
import '../index.css'

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="bg-[#4F959D] xl:h-[150px] h-[250px] py-11 xl:flex flex-col block items-center justify-center gap-2" onSubmit={handleSubmit}>
      <div className='w-full m-auto flex justify-center items-center pt-[20px] ' >
        <h3 className='text-4xl' >Hari ini belanja apa kita?</h3>
      </div>
      <div className='xl:flex xl:flex-row flex-col justify-between items-center ml-[20px] ' >
        <div className='flex justify-center items-center' >
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='flex pt-[20px] bg-[#fefae0] font-inherit border-none rounded-[3rem] px-8 py-3 text-[1.8rem] cursor-pointer' >
                {quantityNum}
            </select>
        </div>
        <div className='flex justify-center items-center mt-[20px] ' >
            <input className='w-[400px] m-auto mt-[10px] ' type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex w-full justify-center items-center pt-[10px] ' >
            <button className='w-[400px] xl:w-[100px] flex justify-center items-center  bg-[#205781]' >Tambah</button>
        </div>
      </div>
    </form>
  );
}