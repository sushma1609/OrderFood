import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (

    <div className="jumbo">
      {/* </div><section class="jumbo"> */}
      <h1>what's cooking today?</h1>

      {/* <div class="search"> */}
      <div className="search">

        {/* type="text"
        class="form-control"
        placeholder="Search Your Recipe..."
        value={search}
        onChange={onInputChange} */}

         <input type="search" placeholder="find a recipe"
          value={search}
          onChange={onInputChange} />
        <button label="FIND" onClick={onSearchClick}>FIND</button>
        {/* value={search}
            onChange={onInputChange} */}
      </div>
    </div>
    //   <h1 className="display-1">
    //     <i class="material-icons brand-icon">fastfood</i> Hung Out
    //   </h1>
    //   <div class="input-group w-50 mx-auto">
    //
    //       type="text"
    //       class="form-control"
    //       placeholder="Search Your Recipe..."
    //       value={search}
    //       onChange={onInputChange}
    //     
    //     <div class="input-group-append">
    //       <button className="btn btn-dark" onClick={onSearchClick}>
    //         Search Recipe
    //       </button>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Header;
