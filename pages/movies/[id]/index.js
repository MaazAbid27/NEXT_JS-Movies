import MovieCard from "@/components/moviecard";
import { GetMovieById } from "@/data"
import Link from "next/link";



export default function MovieDetails(props){

    const movie=props.movie
    return (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      );

}



export async function getStaticProps(context){
    const id=context.params.id
    const movie=GetMovieById(id)

    if (!movie) {
        return {
          notFound: true,
        };
      }

    return{
        props:
        {
        id:id,
        movie:movie
        }
    }

}


export async function getStaticPaths() {
    return {
      paths: [],              
      fallback: 'blocking',   
    };
  }