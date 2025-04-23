import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! Sab ko sab nahi milta</p>
      <button onClick={() => router.push('/')}>Go Home</button>
    </div>
  );
}