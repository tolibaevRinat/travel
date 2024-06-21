import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Uniqueness } from './components/Uniqueness';

import './scss/style.scss';

const Inner = () => (
  <div className="wrapper">
    <Header />
    <main className="page">
      <Hero />
      <Uniqueness />
    </main>
  </div>
);

export default Inner;
