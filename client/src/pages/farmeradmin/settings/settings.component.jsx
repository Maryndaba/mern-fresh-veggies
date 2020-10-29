import React from 'react';
import { Route, NavLink } from 'react-router-dom';

/* Styles */
import './settings.component.styles.scss';

/* Compouse */
/* This component allows the farmer to change his email and password */
import AccountSetting from 'pages/farmeradmin/settings/account/account.component';

/* This component allows the farmer to configure his store */
import PublicProfileSettings from './public.profile/profile.settings.component';


const AdvancedSettings = () => {
  return <div>Advanced Settings</div>;
};

const UserSettings = ({ match, user }) => {

  return (
    <div className="admin__settings">
      <div className="admin__settings__nav">
        <ul>
          <div className="avatar__container">
            <img src={`/images/users/${user.data.photo}`} alt="avatar" />
          </div>
          <h2>{user.data.name}</h2>
          <hr />
          <h3>Settings</h3>

          <li>
            <NavLink
              className="admin__settings__nav-item"
              exact
              to="/farmer/admin/settings"
              activeClassName="admin__settings__nav--active"
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              className="admin__settings__nav-item"
              to="/farmer/admin/settings/public"
              activeClassName="admin__settings__nav--active"
            >
              Public Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className="admin__settings__nav-item"
              to="/farmer/admin/settings/advanced"
              activeClassName="admin__settings__nav--active"
            >
              Advanced Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <>
        <Route exact path={`${match.path}`} render={() => <AccountSetting user={user} />} />
        <Route path={`${match.path}/public`} render={() => <PublicProfileSettings user={user}/>} />
        <Route path={`${match.path}/advanced`} render={() => <AdvancedSettings />} />
      </>
    </div>
  );
};

export default UserSettings;