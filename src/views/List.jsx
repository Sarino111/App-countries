import axios from 'axios';

import React, { useState } from 'react'

import { Link, useNavigate } from "react-router-dom";

// styles
import '../scss/_list.scss'

// components
import ListCountry from '../components/ListCountry'

const About = (props) => {

  const [ country, setCountry]  = useState(null)
  const [ error, setError ] = useState(null)

  // send data (name of country) to search page
  const navigate = useNavigate();   

    
  // Show list of countries after click on alphabet
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get( `https://restcountries.com/v3.1/all` )
      const countries = response.data.map( country => extractCity( country ) )
      if ( e.target.innerText === 'all' ) {
        const countrySort = [...countries].sort((a,b) => a.name < b.name ? -1 : 1 )
        setCountry(countrySort)  
        setError(null)      
      } else {
        const countryalpha = countries.filter( d =>  d.name.charAt(0) === e.target.innerText ? d.name : '' )
        setCountry(countryalpha)
        setError(null)
      }

    } catch ( err ) {
      setError( 'err' )
    }
  }

  const extractCity = ({
    name: {official:name}
  }) => ({name})

  // if error write announcement
  const getError = () => {
    return (
      <div className='error'>
        Oh no! Something went wrong. <br/>
        Try it again.
      </div>
    )
  }

  // send data to search page
  const handlePostCountry = ( data ) => {
    const state = data
    navigate( ('/search'), {state:{ state }} )      
  }

  // return list or notification or error
  const getListItems = () => {
    if( country ) {
      return  <ListCountry
                countryList={country}
                onPostCountry={handlePostCountry}
              />
    } else if ( country === null && error === null) {
      return  <div className='title'>
                Select the initial letter <br/>of the country
              </div>
    } else {
      return getError()
    }
  }

  // template
  return (

    <article>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="list-unstyled list-inline alphabet">
              <li><Link onClick={handleClick} to="#" className="view-all">all</Link></li>
              <li><Link onClick={handleClick} to="#">A</Link></li>
              <li><Link onClick={handleClick} to="#">B</Link></li>
              <li><Link onClick={handleClick} to="#">C</Link></li>
              <li><Link onClick={handleClick} to="#">D</Link></li>
              <li><Link onClick={handleClick} to="#">F</Link></li>
              <li><Link onClick={handleClick} to="#">G</Link></li>
              <li><Link onClick={handleClick} to="#">H</Link></li>
              <li><Link onClick={handleClick} to="#">I</Link></li>
              <li><Link onClick={handleClick} to="#">J</Link></li>
              <li><Link onClick={handleClick} to="#">K</Link></li>
              <li><Link onClick={handleClick} to="#">L</Link></li>
              <li><Link onClick={handleClick} to="#">M</Link></li>
              <li><Link onClick={handleClick} to="#">N</Link></li>
              <li><Link onClick={handleClick} to="#">O</Link></li>
              <li><Link onClick={handleClick} to="#">P</Link></li>
              <li><Link onClick={handleClick} to="#">R</Link></li>
              <li><Link onClick={handleClick} to="#">S</Link></li>
              <li><Link onClick={handleClick} to="#">T</Link></li>
              <li><Link onClick={handleClick} to="#">U</Link></li>
              <li><Link onClick={handleClick} to="#">V</Link></li>             
            </ul>
          </div>
        </div>
      </div>


      {getListItems()}

    </article>
  )
}

export default About