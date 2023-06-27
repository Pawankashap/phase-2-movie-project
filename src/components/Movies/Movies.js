import React,{useState, useEffect} from "react";
import { Container } from 'bootstrap-4-react';
import Moviescard from "../Moviescard/Moviescard";

const img_src = 'https://th.bing.com/th?id=OIP.J9DjjAB_23z9Fv_Y7czqHgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';


function Movies() {

    const [movie, setMovie] = useState([])
  
  useEffect(() => {
      fetch("http://localhost:3001/movies")
        .then(r => r.json())
        .then(data => setMovie((movie)=> movie= data))
  }, [])

  console.log( movie)
  //debugger

  const movieDetails = movie.map((movie) => (
    <Moviescard
        key={movie.id}
        id={movie.id}
        name={movie.name}
        image={movie.image}
        favorite={movie.favorite}
        relasedate={movie.relasedate}
        type={movie.type}
    />
     ))

    return (
        <section id="projects">
        <h2>Movies</h2>
        <Container fluid className='gx-0'>
        <div id="movies-list" >{movieDetails}</div>
        </Container>
        </section>
    );
}

export default Movies;
