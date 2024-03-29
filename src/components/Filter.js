import React from 'react'

const Filter = () => {
  return (
    <div className='filter'>
      <form>
        <input type='search' name='search' id='search' placeholder='Search for a country'/>
      </form>

      <div>
        <select name='select' id='select' className='select'>
          <option value="Filter by region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Filter