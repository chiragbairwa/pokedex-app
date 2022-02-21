// https://codedec.com/tutorials/how-to-implement-search-in-react-js-with-json/

import pokedex from '../public/pokedex'
import { useState, useEffect } from 'react'

const Header = (props, { changeBySearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (document) {
      document.getElementsByClassName('search-bar-input').value = { searchTerm }
    }
  }, [])

  return (
    <div className="header">
      <h1>Pokedex</h1>
      <h1>{props.data1}</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Name/Number"
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          className="search-bar-input"
        />
        <div className="searched-items">
          {pokedex
            .filter((val) => {
              if (searchTerm == '') {
              } else if (
                val.name.english
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val
              }
            })
            .map((val) => {
              return (
                <div
                  id={val.name.english}
                  onClick={
                    console.log(this.id)
                    // changeBySearch(this.key)}
                  }
                >
                  {val.name.english}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default Header
