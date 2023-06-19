
import React from 'react'

// styles
import '../scss/base.scss'
import '../scss/_table.scss'

const List = (props) => {

    const {titleList} = props

  // return data or -
  const currencies = ( req ) => {
    const data = titleList.map( t => t.curre )
    let next = data[0]
    let nameCurr = Object.keys(next)
    let currencies = []
    let symbolCurr = []

    // if have more currencies, show all
    for (let i = 0; i < nameCurr.length ; i++) {
      currencies = [...currencies, next[nameCurr[i]].name + ` (${nameCurr[i]}) `]      
      symbolCurr = [...symbolCurr, `${next[nameCurr[i]].symbol} `]      
    }

    if ( req === 'name' ){
      return currencies ? currencies : '-'
    } else {
      return symbolCurr ? symbolCurr : '-'
    }  
  }
  
  // return data or -
  const getData = ( data ) => {
    return data ? data : '-'
  }

  return (
    <ul className='country bg-dark'>

      {titleList.map( ( data, index )=> 
        <li key={index} className="">
          <div className='name intro'> 
            <p>{ data.name }</p>
          </div>
          <div className='container constainer-img intro'>
            <img className='sign' src={data.sign} alt='erb'/>
            <img className='sign' src={data.flag} alt='flag'/>
          </div>          
          <div className='container'>
            <p><strong>Continent:</strong>&nbsp;&nbsp;&nbsp;&nbsp;{ getData(data.continent) }</p>
            <p><strong>Capital city:</strong>&nbsp;&nbsp;{ getData(data.cap) }</p>
            <p><strong>Borders:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ data.borders ? data.borders.map( b => b + ', ' ) : '-' }</p>
            <p><strong>Area:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ getData(data.area) } km2</p>
            <p><strong>Language:</strong>&nbsp;&nbsp;&nbsp;{ data.language ? Array.from( Object.keys(data.language), k=>[ data.language[k] ] ) : '-' } </p>         
            <p><strong>Time zone:</strong>&nbsp;&nbsp;{ getData(data.timezones) } </p>  
          </div>
          <div className='container'>
            <p><strong>Currencies:</strong>&nbsp;&nbsp;{ currencies('name')  } </p>
            <p><strong>Symbol:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ currencies('symbol')  } </p>            
          </div>
          <div className='flag'>
            <strong>{ data.altFlag ? 'About flag' : ''}</strong> 
            <p>{ getData(data.altFlag) }</p>
          </div>
        </li> 
      )}          
        
    </ul>
  )
}

export default List