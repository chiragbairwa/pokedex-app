// https://codedec.com/tutorials/how-to-implement-search-in-react-js-with-json/
import pokedex from '../public/pokedex'
import { useState } from 'react'

const Header = ({ changeBySearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [displayDiv, setDisplayDiv] = useState('block')
  return (
    <div className="header">
      <h1>Pokédex</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Name/Number"
          onClick={() => setDisplayDiv('block')}
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
              } else if (val.id == searchTerm) {
                return val
              }
            })
            .map((val) => {
              return (
                <div
                  key={val.name.english}
                  onClick={() => {
                    changeBySearch(val.id)
                    setDisplayDiv('none')
                  }}
                  style={{ display: `${displayDiv}` }}
                >
                  {val.name.english} ({val.id})
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default Header
