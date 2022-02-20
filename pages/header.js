import pokedex from '../public/pokedex'

const Header = (props) => {
  // let newdata = []
  // let temp = {}
  // for (let n = 0; n < 809; n++) {
  //   temp = {
  //     key: pokedex[n].name.english,
  //     value: pokedex[n].name.english,
  //     id: pokedex[n].id,
  //   }
  //   newdata[n] = temp
  // }

  return (
    <div className="header">
      <h1>Pokedex</h1>
      <div className="search-bar">
        <button className="search-button">
          <img src="/search.svg" width={20} />
        </button>
      </div>
    </div>
  )
}
export default Header
