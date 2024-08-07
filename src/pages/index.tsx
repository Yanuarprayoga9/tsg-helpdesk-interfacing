import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
   return  router.push('login');
  });
  return <h1 className="text-red-600">Test Home</h1>;
}
