import React from 'react';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton>Edit Profile</EditButton>

              <h1>Guilherme Renna</h1>
              <h2>@guilhermerenna</h2>

              <p>
                  Team Lead at <a href='https://tecsys.com'></a>@Tecsys Inc</a>
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
              </Followage>
          </ProfileData>
      </Container>
  );
}

export default ProfilePage;