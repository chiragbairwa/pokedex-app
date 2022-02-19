import ReactSearchBox from 'react-search-box'
import pokedex from '../public/pokedex'

const Header = () => {
  let newdata = []
  let temp = {}

  for (let n = 0; n < 3; n++) {
    let jsondata = pokedex[n].name.english
    console.log(jsondata)
    Object.assign(newdata, jsondata)
    // Object.assign(temp, { key: pokedex[n].name.english })
    // Object.assign(temp, { value: pokedex[n].name.english })
    // newdata.push(temp)
    // console.log(newdata)
    // console.log(newdata[n])
  }

  return (
    <div className="header">
      <h1>Pokedex</h1>
      <div className="search-bar">
        <ReactSearchBox
          placeholder="Search Pokemon Name"
          data={[newdata]}
          onChange={(value) => console.log(newdata)}
        ></ReactSearchBox>
      </div>
    </div>
  )
}
export default Header
