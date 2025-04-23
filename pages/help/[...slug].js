import { useRouter } from 'next/router';

export default function HelpPage() {
  const r = useRouter();
  const slug = r.query.slug || [];

  const renderContent = () => {
    if (slug.length === 0) return <h1>Help Home</h1>;
    if (slug[0] === 'faqs') return <h1>FAQs</h1>;
    if (slug[0] === 'contact') return <h1>Contact Us</h1>;
    if (slug[0] === 'privacy') return <h1>Privacy Policy</h1>;
    return <h1>Help Topic Not Found</h1>;
  };

  return (
    <div>
      {renderContent()}
      <p style={{ marginTop: '20px' }}>
        <button onClick={() => router.push('/')}>Go Home</button>
      </p>
    </div>
  );
}
