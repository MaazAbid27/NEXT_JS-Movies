import { GetMovieById } from '@/data';
import { GetAllDirectors } from '@/data';


export default function DirectorDetails({ director }) {
  if (!director) return <p>Director not found</p>;

  return (
    <div>
      <h1>{director.name}</h1>
      <p>{director.biography}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const movie = GetMovieById(params.id);

  if (!movie) {
    return { notFound: true };
  }
  const directors=GetAllDirectors()
  const director = directors.find(d => d.id === movie.directorId);

  if (!director) {
    return { notFound: true };
  }

  return {
    props: { director },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}