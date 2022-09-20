import React, { useEffect, useState } from 'react';
import './App.css';
import Movies from './Movies';
import Home from './components/Home';
import { BsSearch } from 'react-icons/bs';  
const App= (props) => {
  const API_KEY="4c30a7ee22434ea92c93684e1f58f29c	";
  const url = "https://image.tmdb.org/t/p/w500/" ;
  const [movies , setMovies]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]= useState('A');
  useEffect( () => {
  getMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },);
  
  const getMovie = async () => {
    const response = await fetch( `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
    const data = await response.json();
    setMovies(data.results)
  console.log(data);
  }
  const updateSearch = e =>{
    setSearch(e.target.value);
    
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
    return (
      
      <div className="App"> 
      <h1 className='h1search'>MovieBox</h1>  
      <form className="search-form" onSubmit={getSearch} action="submit">
      <input  className="search-bar" type="text" placeholder="Movie name..." value={search} onChange={updateSearch}/>
      <button className="search-btn" type="submit" ><BsSearch/></button>
      
      </form>
      <Home></Home>
<br/>
        <div className="movies">
     {movies.map(movie =>(
      
    <Movies 
    key={movie.id}
    title={movie.title}
    rating={movie.vote_average}   
    image= {url + movie.poster_path }
    date={movie.release_date} />))}
      
      </div>
      
      <footer>
        <h3>Copyright &copy; Shant A 2021 </h3>
      </footer>
      </div>
    );
    
}

export default App;
