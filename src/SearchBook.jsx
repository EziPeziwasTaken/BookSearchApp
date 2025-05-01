import { useState } from "react";


function SearchBook({ setBooks }) {
    const [kniha, setKniha] = useState('');
    
    const handleSearch = async () => {  //API sekce
      if (!kniha.trim()) return;
      //require('dotenv').config();
      const apiKey = import.meta.env.VITE_API_KEY;

      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(kniha)}&key=${apiKey}`);
      const data = await res.json(); 
  
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]); //pokud nic nenajde
      }
    };
  
    return (        //SearchBar 
      <div>
        <p>Zadej název knihy:</p> 
        <input value={kniha} onChange={(e) => setKniha(e.target.value)} />
        <button onClick={handleSearch}>Odeslat</button>
      </div>
    );
  }
  
  export default SearchBook;
  