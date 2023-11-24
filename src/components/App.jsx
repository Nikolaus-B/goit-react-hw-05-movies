import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage';
import MoviePage from 'pages/MoviePage';
import { Review } from './Review/Review';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
