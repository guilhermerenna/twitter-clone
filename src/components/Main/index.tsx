import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
  <Container>
      <Header>
          <button>
              <BackIcon />
          </button>

          <ProfileInfo>
              <strong>Guilherme Renna</strong>
              <span>0 Tweets</span>
          </ProfileInfo>
      </Header>

      {/* <ProfilePage></ProfilePage> */}

{/*       <BottomMenu>
          <HomeIcon />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
      </BottomMenu> */}
  </Container>);
}

export default Main;