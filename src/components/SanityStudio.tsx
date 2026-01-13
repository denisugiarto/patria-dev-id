// src/components/SanityStudio.tsx
import { lazy, Suspense } from 'react';
import config from '../../sanity.config';

// Dynamic import of the Studio component
const Studio = lazy(() => 
  import('sanity').then((module) => ({ default: module.Studio }))
);

export default function SanityStudio() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Suspense fallback={<div>Loading Studio...</div>}>
        <Studio config={config} />
      </Suspense>
    </div>
  );
}
