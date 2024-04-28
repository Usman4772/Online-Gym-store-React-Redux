import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  { filterBetweenPrice } from '../redux/Slices/filterItems';


const style = {
  display: 'inline-block',
  width: 240,

  
};
 
const track={
  backgroundColor:"yellow"
}

const dotStyle={
  backgroundColor:"black",
  borderColor:"black"

}
const RangeSlider = ({category}) => {

  const items=useSelector(state=>state.filteredItems.items)
 const [max,setMax]=useState(0)
 const [min,setMin]=useState(0)
  const [value, setValue] = useState([min,max]);
  const dispach=useDispatch()
  function calculateMinMax(){

    let filteredItems=items
  if(category.toLowerCase()!=="all"){
    filteredItems=items.filter(item=>item.category.toLowerCase()===category.toLowerCase())
  }
    const max=Math.max(...filteredItems.map(item=>item.price))
    const min=Math.min(...filteredItems.map(item=>item.price))
  setMax(max)
  setMin(min)

  }

  useEffect(()=>{
    calculateMinMax()

  },[category])
  const handleChange = (newValue) => {
const [min,max]=newValue
dispach(filterBetweenPrice({min,max,category}))
    setValue(newValue);
  };

  const marks = {
    [min]: `Rs${min}`,
    [max]: {
      style: {
        color: '#f50',
      },
      label: <strong>Rs {max}</strong>,
    },
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <div style={style}>
        <Slider  range min={min} max={max} step={500} trackStyle={track} dotStyle={dotStyle} defaultValue={value} marks={marks}   onChange={handleChange} />
      </div>

    <div/>
    </div>
  );
};

export default RangeSlider;
