import React from 'react';
import Link from '../components/Link';

const FilterLink = () => {
  const onClick = () => {console.log('test message 1')}
  return(
    <Link onClick={onClick}/>
  )
}

export default FilterLink;