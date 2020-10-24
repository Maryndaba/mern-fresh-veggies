import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Component Imports */
import Spinner from 'components/spinner/spinner.component';
import Navbar from 'components/navbar/customer-navbar.component';
import Profile from 'components/profile/profile.component';
import Recipes from 'components/recipes/recipes.component';
import Footer from 'components/footer/footer.component';

/* Styles */
import './profile.page.styles.scss';

function ProfilePage() {
  let { farmerId } = useParams();
  const [farmer, setFarmer] = useState([]);
  const [isLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    axios(`/farmers/farmer/${farmerId}`)
      .then(({ data }) => {
        setFarmer(data.data);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [farmerId]);

  const ProfileCompouse = () => {
    return (
      <>
        <Profile {...farmer} />
        <Recipes />

        <section className="profile-page">
          <h2 className="profile-page--header">{farmer.name}'s available products</h2>
          {
            <div className="profile-page__farmer-products">
              {farmer.products.map((product) => (
                <div className="profile-page__farmer-products__card">
                  <h3 className="profile-page__farmer-products__card--name">{product.name}</h3>
                  <div className="profile-page__farmer-products__card__img-container">
                    <img
                      src={`/images/users/${farmer.photo}`}
                      alt="img"
                      className="profile-page__farmer-products__card__img-container--img"
                    />
                  </div>
                  <span className="profile-page__farmer-products__card--type">Type: {product.type}</span>
                  <p className="profile-page__farmer-products__card--description">Information: {product.description}</p>
                </div>
              ))}
            </div>
          }
          {/* query the specific farmer and show the profile */}
        </section>
        <Footer />
      </>
    );
  };

  return (
    <>
      <Navbar />
      {isLoading ? <Spinner /> : <ProfileCompouse />}
    </>
  );
}

export default ProfilePage;