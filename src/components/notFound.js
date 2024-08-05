import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after a brief delay
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting you to the home page in 3 seconds...</p>
    </div>
  );
};

export default NotFoundPage;