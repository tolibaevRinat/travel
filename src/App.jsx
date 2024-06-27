import { Suspense, lazy } from 'react';

import { Preloader } from './components/Preloader';

const Inner = lazy(() => import('./Inner'));

const App = () => (
  <Suspense fallback={<Preloader />}>
    <Inner />
  </Suspense>
);

export default App;
