import React from 'react'

const CL_SearchBar = () => {
    return ( 
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 search text-2" type="search" placeholder="Buscar en patitas" aria-label="Search"/>
            <button className="btn my-2 my-sm-0 search-btn" type="submit">Busca!</button>
          </form>
     );
}
 
export default CL_SearchBar;