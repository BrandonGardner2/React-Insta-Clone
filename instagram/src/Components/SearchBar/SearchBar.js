import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import IGLogo from "../../assets/iglogo.png";
import CameraLogo from "../../assets/cameralogo.svg";

import SearchField from "./SearchField";

const SearchBarWrapper = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  width: 100%;
`;

const SearchBarComponent = styled.div`
  display: flex;
  height: 100%;
  max-width: 700px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;

const LogoImg = styled.img`
  height: 30px;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }
`;

const LogoSpan = styled.span`
  font-size: 32px;
`;

const ActionBtns = styled.div``;

const SocialBtn = styled.span`
  cursor: pointer;
  font-size: 24px;
  font-weight: lighter;
  margin: 0 10px;
`;

const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <SearchBarComponent>
        <Logo onClick={props.resetPosts}>
          <LogoImg src={CameraLogo} alt="Camera logo" />
          <LogoSpan>|</LogoSpan>
          <LogoImg src={IGLogo} alt="Instagram logo" />
        </Logo>
        <SearchField filterPosts={props.filterPosts} />
        <ActionBtns>
          <SocialBtn>
            <i className="far fa-compass" />
          </SocialBtn>
          <SocialBtn>
            <i className="far fa-heart" />
          </SocialBtn>
          <SocialBtn>
            <i className="far fa-user-circle" />
          </SocialBtn>
        </ActionBtns>
      </SearchBarComponent>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  filterPosts: PropTypes.func.isRequired,
  resetPosts: PropTypes.func.isRequired
};

export default SearchBar;
