import * as React from "react";
import { Navbar, Nav, Button, Container, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";

function MentoHeader(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Containers>
        <Navbar.Brand>
          <Nav.Link href="/">
            <ImageWrapper>
              <img
                width="80"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
            </ImageWrapper>
          </Nav.Link>
        </Navbar.Brand>

        <LogWrapper>
        <Navbar.Brand>
          <Nav.Link href="/">
          <SvgIcon
            {...props}
            sx={{
              fontSize: 40,
              border: 2,
              borderRadius: 3,
              borderColor: "#D9D9D9",
            }}
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
          </Nav.Link>
        </Navbar.Brand>
        </LogWrapper>
      </Containers>

    </div>
  );
}
export default MentoHeader;

const Containers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  border-bottom-width: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

const LogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: flex-end;
  margin-right: 24px;
  size: 100%;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  width: 100%;
  border-bottom-width: 10px;
  border-color: black;
`;

const CategoryWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  background-color: white;
  //height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #dfeeda;
  //border-bottom-width: 10px;
  border-color: #dfeeda;
  margin-left: 15px;
`;