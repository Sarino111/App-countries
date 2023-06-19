import React, { useRef } from 'react'

// styles
import '../scss/_searchForm.scss'


const SearchForm = (props) => {

    const {onSearchSubmit} = props

    let inputRef = useRef(null)

    // send data from input to parent and delete text from input
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchSubmit( handleChange() )

        // delete content of input after show data
        inputRef.current.value =''
    }
    
    // return data from input
    const handleChange = () => {
        return inputRef.current.value
    }



  return (
    <form onSubmit={e=>handleSubmit(e)} className='search-box'>
        <input 
          autoFocus
          className='search-input' 
          type="text" 
          placeholder="Search"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="search-button" href="#">
          <i className="material-icon"/>           
        </button>
    </form>

  )
}

export default SearchForm
