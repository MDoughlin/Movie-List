import React from "react";


const Searchbar = (props) => {
  return (
    <>
      <div className="text-center mt-4 mb-4">
        <input
          type="text"
          placeholder="Movie Title"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </>
  );
};

export default Searchbar;
