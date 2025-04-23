import Link from 'next/link';

export default function MovieCard(props) {
    const movie=props.movie
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', borderRadius: '8px' }}>
      <h3>{movie.title}</h3>
      <p><strong>Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <Link href={`/movies/${movie.id}`}><p>View Details</p></Link>
    </div>
  );
}