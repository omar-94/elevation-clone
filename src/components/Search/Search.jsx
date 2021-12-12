
import React, { useState } from "react";
import Data from "../../elevationData";

const Search = () => {
  
  const [filterText, setFilterText] = useState("");

  const filteredItems = Data.filter(
    item =>
      item.campusName.includes(filterText) ||
      item.description.includes(filterText)
  );

  const dataToDisplay = filterText ? filteredItems : Data;

  return (
    <div style={{ padding: '20px 50px'}}>
      <h1>Search</h1>
      <input
        type='text'
        placeholder='Filter items by keyword'
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      {!filteredItems.length && (
        <div>There are no items to display</div>
      )}  
      {dataToDisplay.map(item => (
        <div key={item.campusName}>
          <h3>{item.campusName}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Search;