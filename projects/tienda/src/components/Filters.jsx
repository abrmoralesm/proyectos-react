import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";

export function Filters() {
  const {filters, setFilters} = useFilters()


  const minPriceFilterId = useId();
  const categotyFilterId = useId();
  
  const handleChangedMinPrice = (e) => {
    
    setFilters(prevState=>({
        ...prevState,
        minPrice:e.target.value
    }))
  };
const handleChangeCategory=(event)=>{
    setFilters(prevState=>({
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
          value = {filters.minPrice}
        />
        <span>${filters.minPrice}</span>
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
