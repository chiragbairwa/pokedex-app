// https://codedec.com/tutorials/how-to-implement-search-in-react-js-with-json/
import pokedex from '../public/pokedex'
import { useState, useEffect } from 'react'

const Header = ({ changeBySearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="header">
      <h1>Pokedex</h1>
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
                  key={val.name.english}
                  onClick={() => changeBySearch(val.id)}
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
