import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData,
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Edit Profile</EditButton>

              <h1>Guilherme Renna</h1>
              <h2>@guilhermerenna</h2>

              <p>
                  Team Lead at <a href="https://tecsys.com">@Tecsys Inc</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Montreal, QC, Canada
                  </li>
                  <li>
                      <CakeIcon />
                      Born on July 17th
                  </li>
              </ul>

              <Followage>
                  <span>Following <strong>200</strong> </span>
                  <span>Followed by <strong>1000</strong> </span>
              </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;