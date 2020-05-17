import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') router.replace('/');
  });
  return <></>;
};

export default Page;
