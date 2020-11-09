import React, {useEffect} from 'react';

/* Components */
import HeaderFarmerProfile from 'pages/farmeradmin/home/header/header.profile';
import GalleryList from 'pages/farmeradmin/home/gallery/gallery.list';

/* Styles */
import './profile.styles.scss';

const FarmerBioGraphy = () => {
  return (
    <div className="panel-profile__biography">
      <div className="panel-profile__biography__info">Welcome</div>
      <div className="panel-profile__biography__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nostrum totam a deleniti labore quis nihil, quidem
        amet laboriosam ea asperiores velit accusamus. Iste numquam pariatur nesciunt sapiente quidem perspiciatis neque
        facilis quia totam sequi praesentium itaque cupiditate voluptatem nisi maiores laboriosam, aliquam nam, ut
        mollitia veritatis quam. Natus, sunt laborum modi recusandae, suscipit reiciendis nostrum dolorum asperiores sed
        tempore molestias officia, perspiciatis fuga tenetur ad ducimus sequi blanditiis expedita explicabo nesciunt
        repellendus qui doloribus numquam rem? Itaque expedita excepturi rem doloribus saepe ipsum sapiente in sint
        accusantium, dolorem tenetur enim sed ea totam cumque repellendus dolorum cupiditate laboriosam repellat. Illum,
        rerum mollitia! Recusandae repudiandae aliquam alias distinctio, quasi neque dolorem corporis officiis quo quam
        culpa nobis iste inventore, soluta eaque temporibus consectetur consequuntur, laborum iure explicabo asperiores
        exercitationem rerum sapiente? Dolores aperiam molestiae consequatur. Deleniti adipisci at dolores quos dolorum,
        voluptatum ad, libero eligendi dignissimos optio ex voluptatibus vel obcaecati minima provident quidem
        temporibus tenetur ducimus commodi consequatur earum? Voluptates possimus repellendus unde dolorum quod ex
        laborum error cupiditate soluta totam. Cumque debitis voluptatibus ullam autem necessitatibus amet hic, ex odio
        excepturi voluptas, perspiciatis.
      </div>
    </div>
  );
};

const ProfileAdmin = () => {
  
  /* Retrieve Farmer Panel */
  useEffect(() => {
    
  }, []);

  
  return (
    <section className="panel-profile">
      <div className="panel-profile__wrapper">
        {/* <HeaderFarmerProfile name={name} farmerPhoto={profile} /> */}
        <FarmerBioGraphy />
        <hr />
        {/* <GalleryList name={name}/> */}
        <hr />
      </div>
    </section>
  );
};

export default ProfileAdmin;