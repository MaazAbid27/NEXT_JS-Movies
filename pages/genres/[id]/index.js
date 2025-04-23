
import MovieCard from '@/components/moviecard';
import {  GetMoviesByGenreId } from '@/data';
import { GetGenresById } from '@/data';



  
 
  export default function GenreMovies(props) {
    
    const id=props.id
    const genre=GetGenresById(id)
    const movies=GetMoviesByGenreId(id)
    
   
    return (
      <div>
        <h1>Movies for {genre.name}</h1>
        {movies.map(m => (
          <MovieCard key={m.id} movie={m}>
            <h2>
                {m.title}
            
          </h2>
          </MovieCard>
        ))}
      </div>
    );
  }

  export async function getServerSideProps(context) {
    const id=context.params.id;
    
    
    
  
    return {
      props: {
        id:id
      }
    };
  }
  