import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Uniqueness } from './components/Uniqueness';
import { Reserv } from './components/Reserv';
import { ReviewsItem } from './components/ReviewsItem';
import { Questions } from './components/Questions';

import { getSliceReviews, getAllReviews } from './redux/slices/reviewsSlice';

import './scss/style.scss';

const Inner = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const status = useSelector((state) => state.reviews.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliceReviews());
  }, []);

  const handleShowMore = () => {
    dispatch(getAllReviews());
  };
  useEffect(() => {
    if (reviews.length > 4) {
      window.scrollTo(0, document.documentElement.scrollHeight);
    }
  }, [reviews.length]);

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Hero />
        <Uniqueness />
        <Reserv />
        <section className="reviews">
          <div className="container flex f-d-col">
            <ul className="reviews__list">
              {status === 'success' ? (
                reviews.map((review) => <ReviewsItem key={review.id} {...review} />)
              ) : (
                <h2>Что та пошло те так</h2>
              )}
            </ul>
            {reviews.length < 4 && (
              <button onClick={handleShowMore} className="reviews__btn f-cen" type="button">
                Еще
              </button>
            )}
          </div>
        </section>
        <Questions />
      </main>
    </div>
  );
};

export default Inner;
