import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Uniqueness } from './components/Uniqueness';
import { Reserv } from './components/Reserv';
import { ReviewsItem } from './components/ReviewsItem';
import { Questions } from './components/Questions';
import { Footer } from './components/Footer';

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

  const isMobile = useMediaQuery({ minWidth: 767.98 });

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Hero isMobile={isMobile} />
        <Uniqueness isMobile={isMobile} />
        <Reserv isMobile={isMobile} />
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
        <Questions isMobile={isMobile} />
      </main>
      <Footer isMobile={isMobile} />
    </div>
  );
};

export default Inner;
