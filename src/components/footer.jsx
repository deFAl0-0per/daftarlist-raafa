import '../index.css'

export default function Footer({ items }) {
    if (items.length === 0) return <footer className="bg-[#205781] h-[100px] flex justify-center items-center text-4xl text-white text-center py-12 text-2xl font-bold">Daftar belanjaan masih kosong!</footer>;
  
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);
  
    return (
      <footer className="bg-[#205781] h-[100px] flex justify-center items-center text-4xl text-white text-center py-12 text-2xl font-bold" >
        Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
      </footer>
    );
  }