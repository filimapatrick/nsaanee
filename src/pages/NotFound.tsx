import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/'), 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="text-lg text-gray-300 mb-6">Page not found. Redirecting to home…</p>
        <button
          className="bg-emerald-500 text-white px-6 py-2 rounded"
          onClick={() => navigate('/')}
        >
          Go home now
        </button>
      </div>
    </div>
  );
}
