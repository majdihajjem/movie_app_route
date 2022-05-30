import './App.css';
import MovieList from './component/MovieList';
import Add from './component/add';
import Filter from './component/filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import {Routes,Route} from "react-router-dom";
import Description from './component/Description'
import Home from './component/Home';
function App() {
  const [movies,setMovies] = useState([
    {
        id:uuidv4(),
        title:"prison Break",
        imgurl:"https://images6.alphacoders.com/469/thumbbig-469280.webp",
        discription:"season 4 (2015)",
        trailer:"https://www.youtube.com/embed/d6BRWxsrcNA",
        rating:5
    },
    {   id:uuidv4(),
        title:"the lion king",
        imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh",
        discription:"season 1 (2019)",
        trailer:"https://www.youtube.com/embed/7TavVZMewpY",
        rating:4
    },
    {   id:uuidv4(),
        title:"chernobyl",
        imgurl:"https://images.6play.fr/v2/images/3401257/raw?blur=0&fit=scale_crop&format=jpeg&height=630&interlace=1&quality=60&width=1200&hash=2c7274d86697ef2fa03084c270ed7f7c04a83d3c",
        discription:"season 1 (2010)",
        trailer:"https://www.youtube.com/embed/s9APLXM9Ei8",
        rating:3
    },
    {  id:uuidv4(),
      title:"the lion king",
      imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh",
      discription:"season 2 (2021)",
      trailer:"https://www.youtube.com/embed/7TavVZMewpY",
      rating:5
  },
]);
const add = (newmovie) => {
  setMovies((movies) => movies.concat(newmovie));
};
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home movies={movies} add={add} />} />
          <Route path='/description/:id' element={<Description movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
