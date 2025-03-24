

export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li className='flex text-[#283618] text-4xl font-bold flex items-center gap-8 mb-14' key={item.id}>
            <div className='flex justify-center relative items-center mt-[20px] ' >
                <input className='ml-[100px] flex h-12 w-12 accent-[#205781]' type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
            </div>
            <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.name}
            </span>
            <div className='flex' >
                <button className='flex items-center justify-center cursor-pointer text-[2.6rem] p-0 w-[10px] h-[30px] bg-red' onClick={() => onDeleteItem(item.id)}>&times;</button>
            </div>
      </li>
    );
  }