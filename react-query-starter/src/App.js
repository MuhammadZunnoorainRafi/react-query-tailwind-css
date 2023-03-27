import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RQSuperheroes from './pages/RQSuperheroes';
import Superheroes from './pages/Superheroes';

import OneRQsuperheroes from './pages/OneRQsuperheroes';
import ParrallelQueries from './pages/ParrallelQueries';
import DynamicParrallelQueries from './pages/DynamicParrallelQueries';
import DependentQuerires from './pages/DependentQuerires';
import PaginatedQueries from './pages/PaginatedQueries';
import InfiniteQueries from './pages/InfiniteQueries';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto px-0 xl:px-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/superheroes" element={<Superheroes />} />
            <Route path="/RQsuperheroes" element={<RQSuperheroes />} />
            <Route
              path="/RQsuperheroes/:heroesId"
              element={<OneRQsuperheroes />}
            />
            <Route path="/parallel-queries" element={<ParrallelQueries />} />
            <Route
              path="/dynamicPQ"
              element={<DynamicParrallelQueries dynamicQ={[1, 3]} />}
            />
            <Route
              path="/dependentQ"
              element={<DependentQuerires email="vishwas@example.com" />}
            />
            <Route path="/paginatedQ" element={<PaginatedQueries />} />
            <Route path="/infiniteQ" element={<InfiniteQueries />} />
          </Routes>
        </main>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
