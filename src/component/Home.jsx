import React,{useState,useEffect} from 'react'
import Add from './add';
import Filter from './filter';
import MovieList from './MovieList';

function Home({movies,add}) {
    const [filteredMovie,setFilteredMovie] = useState([])
    const [searchKeys,setSearchKeys] = useState({
      key:"",
      rate:1
    })

      const search = (e) => {
        setSearchKeys({...searchKeys,[e.target.name]:e.target.value})
      };
      
      useEffect(() => {
        setFilteredMovie(movies.filter(m => (m.rating >= searchKeys.rate) && (searchKeys.key === "" || m.title.startsWith(searchKeys.key) )))
      }, [movies,searchKeys])  
  return (
    <div>
              <Filter search={search} />
      <Add add={(newmovie)=>add(newmovie)}/>
      <MovieList movies={filteredMovie} />
    </div>
  )
}

export default Home