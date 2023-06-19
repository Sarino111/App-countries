import React from 'react'

import { Link } from "react-router-dom";

// styles
// import '../scss/base.scss'

const List = (props) => {

    const {countryList, onPostCountry} = props

    // send data to parent
    const handleCountry = (e) => {
      e.preventDefault()
      onPostCountry( e.target.innerText )
    }
   
   
  return (
    <ul className='country bg-dark'>

      {
      countryList.map( ( data, index )=> 
      
        <li key={index} className="list-cities">

          <div className=''> 
            <Link 
              onClick={handleCountry} 
              href=''
              >
                { data.name }              
            </Link>
          </div>

        </li> 
        
      )}

    </ul>
  )
}

export default List