
import React, { useState } from "react";


const Searchbar = () => {

  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="text-center mt-4 mb-4">
        <input
          type="text"
          placeholder="Movie Title"
        />
        <button type="submit">Search</button>
      </div>
    </>
  );
};

export default Searchbar;
