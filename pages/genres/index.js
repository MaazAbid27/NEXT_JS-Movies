import { useRouter } from 'next/router';
import { GetAllGenres } from '@/data';



  
 
  export default function Genres(props) {
    const router=useRouter()
    const genres=props.genres
    return (
      <div>
        <h1>Genres</h1>
        {genres.map(genre => (
          <div key={genre.id}>
            <h2 style={{ cursor: 'pointer', color: 'blue' }} onClick={() => router.push(`/genres/${genre.id}`)}>
            {genre.name}
          </h2>
          </div>
        ))}
      </div>
    );
  }

  export async function getServerSideProps() {
    const data=GetAllGenres();
    
    
  
    return {
      props: {
        genres:data
      }
    };
  }
  