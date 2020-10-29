import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Recipes from 'components/recipes/recipes.component';

/* Styles */
import './profile.page.styles.scss';

/* Component Photos Gallery */
import PhotosGallery from 'pages/shop/profile/photos.gallery';

/* Component Farmer Products */
const FarmerProducts = ({ farmer }) => {
  return (
    <React.Fragment>
      <section className="profile-page">
        <h2 className="profile-page--header">{farmer.name}'s available products</h2>
        {
          <div className="profile-page__farmer-products">
            {farmer.products.map((product) => (
              <div className="profile-page__farmer-products__card">
                <h3 className="profile-page__farmer-products__card--name">{product.name}</h3>
                <div className="profile-page__farmer-products__card__img-container">
                  <img
                    src={`/images/users/${product.photo}`}
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
    </React.Fragment>
  );
};

/* Sidebar profile */
const Profile = ({ photo, name, description }) => {
  return (
    <section className="public__farmer__profile">

    </section>
  );
};

function ProfilePage() {
  const { farmerId } = useParams();

  /* Farmer page object */
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
    const { open, recipes, gallery, products } = farmer.config;
    //console.log(farmer.config);

    return (
      <>
        {open ? (
          <>
            <Profile {...farmer} />
            {gallery ? <PhotosGallery /> : null}
            {products ? <FarmerProducts farmer={farmer} /> : null}
            {recipes ? <Recipes /> : null}
          </>
        ) : (
          <h3 style={{ paddingTop: '50vh' }}>This store is closed at the moment</h3>
        )}
      </>
    );
  };

  return <>{isLoading ? <Spinner /> : <ProfileCompouse />}</>;
}

export default ProfilePage;
