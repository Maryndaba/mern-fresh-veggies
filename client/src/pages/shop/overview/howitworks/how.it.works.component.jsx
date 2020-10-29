import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Styles */
import './how.it.works.styles.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-we-work">
      {/* ======== Hero Section === */}
      <div className="how-it-works__hero-section">
        <h2 className="how-it-works__hero-section--header">How it works</h2>
        <div className="how-it-works__hero-section__img-container">
          <img src="/images/farm-1.jpg" alt="img" className="how-it-works__hero-section__img-container--img" />
        </div>

        <div className="how-it-works__hero-section__banner">
          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">Choose a Local Farmer</h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Encourage local farms to adopt and continue responsible farming practices.
            </div>
          </div>

          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">Fresh and Local Food</h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              You’ll have the peace of mind knowing that you're eating quality, natural foods.
            </div>
          </div>

          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">Convenient Deliveries</h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Carbon-neutral shipping, 100% recyclable packaging, zero-waste warehouses.
            </div>
          </div>
        </div>
      </div>

      {/* ======== Information Section === */}
      <div className="how-it-works__info-section">
        <div className="how-it-works__info-section__left-container">
          <div className="how-it-works__info-section__left-container__text-container">
            <h2 className="how-it-works__info-section__left-container__text-container--header">This is HEADER</h2>
            <div className="how-it-works__info-section__left-container__text-container--text">
              Farms can access a wide range of ingredients that are in season, giving you plenty of new and fresh
              choices. Follow your favorite farmers, choose your seasonal food and get delivered in the week.
            </div>
          </div>
          <div className="how-it-works__info-section__left-container__img-container">
            <img
              src="/images/farm-1.jpg"
              alt="img"
              className="how-it-works__info-section__left-container__img-container--img"
            />
          </div>
        </div>

        <div className="how-it-works__info-section__right-container">
          <div className="how-it-works__info-section__right-container__img-container-1">
            <img
              src="/images/farm-1.jpg"
              alt="img"
              className="how-it-works__info-section__right-container__img-container-1--img"
            />
          </div>
          <div className="how-it-works__info-section__right-container__img-container-2">
            <img
              src="/images/farm-1.jpg"
              alt="img"
              className="how-it-works__info-section__right-container__img-container-2--img"
            />
          </div>
        </div>
      </div>

      {/* ======== Icons Section === */}
      <div className="how-it-works__icons-section">
        <h2 className="how-it-works__icons-section--header">This is Header</h2>
        <div className="how-it-works__icons-section__box-container">
          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'truck']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Easy Delivery</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;