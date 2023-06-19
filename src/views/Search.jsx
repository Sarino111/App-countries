import axios from 'axios';

import React, { useEffect, useState } from 'react'

import { useLocation } from "react-router-dom";

// component
import SearchForm from '../components/SearchForm';
import Table from "../components/Table";

// styles
import "../scss/_search.scss"


const Search = (props) => {

  const [ title, setTitle ] = useState([])
  const [ error, setError ] = useState(null)

  // Take data from list page (name of country)
  const location = useLocation()

  // return notification if don't have title (country) or error 
  const getName = () => {
    if ( title.length === 0 && error === null )
    return <div className='title'>Write name of the country</div>
  }

  // get data for table from api
  const handleSearchSubmit = (name) => {
    
    if ( name ) {
    const loadData = async () => {
      try {
        const response = await axios.get( `https://restcountries.com/v3.1/name/${name}` )
        const country = response.data.map( items => extractData( items ) )
        const countrySort = [...country].sort((a,b) => a.name < b.name ? -1 : 1 )
        setTitle(countrySort)
        setError(null)
      } catch ( err ) {
        setError( 'err' )
      }
    }

    loadData()
   
    const extractData = ({        
      name:           {official:name},
      capital:        cap,
      coatOfArms:     {png:sign},
      flags:          {png:flag},
      flags:          {alt:altFlag},
      area,
      borders,
      continents:     continent,
      languages:      language,
      timezones,
      currencies:     curre
    }) => ({ name, cap, sign, flag, altFlag, 
      area, borders, continent, language, timezones, curre })   
    }
  }

  // if error return notification
  const getError = () => {
    return (
      <div className='error'>
        Oh no! Something went wrong. <br/>
        Maybe incorrect name of the country. <br/>
        Try select country from the list.
      </div>
    )
  }

  // send name of country from list page to handleSearchSubmit()
  useEffect( () => { 
    handleSearchSubmit(location.state ? location.state.state : '') 
  }, [])

  // template
  return (

    <article className='search-page'>

      <SearchForm
        onSearchSubmit={handleSearchSubmit}
      />

      {getName()}

      { error === 'err' ? getError() :
      <Table
        titleList = {title}
      />
      }

    </article>
  )
}

export default Search