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
          type="search"
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

      {/* <div class="content">
        <div class="search-bar-mob">
          <input
            class="search-bar-mob__input"
            type="text"
            placeholder="search..."
            aria-label="search"
          />
          <button class="search-bar-mob__submit" aria-label="submit search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  )
}
export default Header
