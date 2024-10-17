import { useEffect, useRef } from 'react';
import '../assets/css/SearchInput.css'
import { SearchIcon } from '../utils/Icons';

export function SearchInputHeader ({active}) {

  const inputRef = useRef(null)  

  useEffect(()=>{
    if(active){
      inputRef.current.focus()
    }
  },[])

  return (
    <div className='search-input-container'>
      <input ref={inputRef} className='search-input' type="text" />
      <button className='search-button'>
        <SearchIcon/>
      </button>
    </div>
  );
};