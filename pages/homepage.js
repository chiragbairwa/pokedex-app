import { useState } from 'react'
import Header from './header'
import InfoType from './infotype'

export default function Homepage() {
  const [number, setNumber] = useState(1)

  return (
    <div className="homepage">
      <Header></Header>
      <div className="photo-name-container">
        {/* Picture */}
        <img src="/vercel.svg" alt="Pokemon Picture" />

        {/* Number & Name */}
        <div className="poke-bio">
          <h2>#004</h2>
          <h3>Bulbasaur</h3>
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <button
          onClick={() => setNumber(number - 2)}
          className="slider-btn-low"
        >
          {number - 2}
        </button>
        <button
          onClick={() => setNumber(number - 1)}
          className="slider-btn-mid"
        >
          {number - 1}
        </button>
        <button onClick={() => setNumber(number)}>{number}</button>
        <button
          onClick={() => setNumber(number + 1)}
          className="slider-btn-mid"
        >
          {number + 1}
        </button>
        <button
          onClick={() => setNumber(number + 2)}
          className="slider-btn-low"
        >
          {number + 2}
        </button>
      </div>

      {/* Information */}
      <div className="poke-biodata">
        <div className="poke-info"></div>
        <InfoType></InfoType>
      </div>
    </div>
  )
}
