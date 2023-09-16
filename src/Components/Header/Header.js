import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

import MDBox from "../MDBox";
import MDButton from "../MDButton";
import {Breadcrumbs} from "@mui/material";

import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "./styles";
import MDInput from "../MDInput";



const Header = () => {
    const [navbarType, setNavbarType] = useState();
    // const [controller, dispatch] = useMaterialUIController();
    // const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;


    return (
        <AppBar
      // position={absolute ? "absolute" : navbarType}
      // color="inherit"
      // sx={(theme) => navbar(theme, { transparentNavbar/*, absolute, light*/, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, )}>
          <Breadcrumbs icon="home"  />
        </MDBox>
         (
          <MDBox sx={(theme) => navbarRow(theme, )}>
            <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox>
            <MDBox display="flex" alignItems="center" >
              <Link to="/authentication/sign-in/basic">
                <IconButton sx={navbarIconButton} size="small" disableRipple>
                  <Icon >account_circle</Icon>
                </IconButton>
              </Link>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                // onClick={handleMiniSidenav}
              >
                <Icon fontSize="medium">
                  {/*{miniSidenav ? "menu_open" : "menu"}*/}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                // onClick={handleConfiguratorOpen}
              >
                <Icon >settings</Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                // onClick={handleOpenMenu}
              >
                <Icon >notifications</Icon>
              </IconButton>
              {/*{renderMenu()}*/}
              <MDBox>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  type="button"
                  // onClick={handleLogOut}
                >
                  Log Out
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        )
      </Toolbar>
    </AppBar>
    );
};

export default Header;