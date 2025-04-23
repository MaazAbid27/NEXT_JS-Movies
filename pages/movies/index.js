
import MovieCard from "@/components/moviecard";
import { GetAllMovies } from "@/data";
import Link from "next/link";


export default function MoviesPage(props){
    const movie=props.movie
    return(
        <div>
        <h1>All Movies</h1>
        {movie.map(m => (
          <MovieCard key={m.id} movie={m}>
            <Link href={`/movies/${m.id}`}>
              <p>{m.title}</p>
            </Link>
          </MovieCard>
        ))}
      </div>
    )


}


export async function getStaticProps(){

const movielist=GetAllMovies()



return{
    props:
    {
        movie:movielist
    }
}

}