import { useState, useId } from "react";
import "./Filters.css";

export function Filters({onChange}) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categotyFilterId = useId();
  
  const handleChangedMinPrice = (e) => {
    
    setMinPrice(e.target.value);
    onChange(prevState=>({
        ...prevState,
        minPrice:e.target.value
    }))
  };
const handleChangeCategory=(event)=>{
    onChange(prevState=>({
        ...prevState,
        category:event.target.value
    }))

}
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>

        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangedMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categotyFilterId}>Category</label>
        <select id={categotyFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  );
}
