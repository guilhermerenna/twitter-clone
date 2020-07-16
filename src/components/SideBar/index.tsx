import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Maybe you like it"
            elements={[
              <FollowSuggestion
                name="Lorena Mendes"
                nickname="@lolamendesak"
              />,
              <FollowSuggestion name="Lorena Mendes" nickname="@lolamendesak" />,
              <FollowSuggestion
                name="Victor Negreiros"
                nickname="@victornegreiros"
              />,
            ]}
          />
          <List
            title="What's going on"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;