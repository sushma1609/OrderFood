import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (

    <div className="jumbo">

      <h1>what's cooking today?</h1>


      <div className="search">



        <input type="search" placeholder="find a recipe"
          value={search}
          onChange={onInputChange} />
        <button label="FIND" onClick={onSearchClick}>FIND</button>

      </div>
    </div>


  );
};

export default Header;
