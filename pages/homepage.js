import Header from './header'
import React, { useState } from 'react'
import Image from 'next/image'
import pokedex from '../public/pokedex'

/* react-color-extractor Used for Color extraction from image  */
import { ColorExtractor } from 'react-color-extractor'

export default function Homepage() {
  const [number, setNumber] = useState(1)
  const [bgcolor, setbgcolor] = useState('rgb(132, 204, 180)')

  let imageSource =
    'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/'
  let thumbSource =
    'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/'

  function numSort() {
    let num = ''
    if (number < 10) {
      num = '00' + number
    } else if (number < 100) {
      num = '0' + number
    } else {
      num = number
    }
    return num
  }
  function imageUrl() {
    return imageSource + numSort() + '.png'
  }
  function thumbUrl() {
    return thumbSource + numSort() + '.png'
  }
  const changeBySearch = (gotSearchedName) => setNumber(gotSearchedName)

  return (
    <div
      className="homepage"
      style={{ backgroundColor: bgcolor, transition: 'background 0.5s' }}
    >
      <Header changeBySearch={changeBySearch}></Header>

      <ColorExtractor
        src={thumbUrl()}
        getColors={(colors) => setbgcolor(colors[0])}
      />

      {/* Height & Weight */}
      <div className="poke-HW">
        <p>
          Height: <b>{pokedex[number - 1].profile.height}</b>
        </p>
        <p>
          Weight: <b>{pokedex[number - 1].profile.weight}</b>
        </p>
      </div>
      {/* Picture */}

      <img
        src={imageUrl()}
        alt={`${pokedex[number - 1].id}`}
        priority="true"
        className="poke-image"
      />

      {/* Number & Name*/}

      <div className="poke-bio">
        <h1>#{numSort()}</h1>

        <h2>{pokedex[number - 1].name.english}</h2>

        <div className="type-container">
          {pokedex[number - 1].type.map((val) => {
            return (
              <div
                className="type"
                key={val + ' ' + pokedex[number - 1].name.english}
              >
                <Image
                  src={`/types/${val}.png`}
                  width={40}
                  height={40}
                  alt="type"
                  className="type-image"
                ></Image>
              </div>
            )
          })}
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <button
          onClick={() => {
            setNumber(number - 2)
          }}
          className="slider-btn-1"
        >
          {number - 2}
        </button>
        <button
          onClick={() => {
            setNumber(number - 1)
          }}
          className="slider-btn-2"
        >
          {number - 1}
        </button>
        <button className="slider-btn-3"> {number} </button>
        <button
          onClick={() => {
            setNumber(number + 1)
          }}
          className="slider-btn-4"
        >
          {number + 1}
        </button>
        <button
          onClick={() => {
            setNumber(number + 2)
          }}
          className="slider-btn-5"
        >
          {number + 2}
        </button>
      </div>

      {/* Information */}
      <div className="poke-biodata">
        <div className="poke-stats">
          <div>
            <div>
              <p>Hp : {pokedex[number - 1].base.HP}</p>
            </div>
            <div>
              <p>Attack: {pokedex[number - 1].base.Attack}</p>
            </div>
            <div>
              <p>Defence: {pokedex[number - 1].base.Defense}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Sp. Att: {pokedex[number - 1].base['Sp. Attack']}</p>
            </div>
            <div>
              <p>Sp. Def: {`${pokedex[number - 1].base['Sp. Defense']}`}</p>
            </div>
            <div>
              <p>Speed: {pokedex[number - 1].base.Speed}</p>
            </div>
          </div>
        </div>
        <div className="poke-info">
          <h2>Information :</h2>
          <p>{pokedex[number - 1].description}</p>
        </div>
      </div>
    </div>
  )
}
