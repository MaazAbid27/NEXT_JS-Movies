import { useRouter } from 'next/router';
import { GetTrendingMovies } from '@/data';
import MovieCard from '@/components/moviecard';


export default function Home( props ) {
  const router = useRouter();
  const trendmovies = props.movies1;


  return (
    <div>
      <h1>Trending Movies</h1>
      {trendmovies.map(movie => (
        <div key={movie.id} movie={{movie}}>{movie.title}</div>
      ))}
      <button onClick={() => router.push('/genres')}>Browse Genres</button>
    </div>
  );
}

export async function getStaticProps() {

    const trending=GetTrendingMovies();

    return {
        props: {
        movies1: trending,
        },
        revalidate: 10, 
    };
}