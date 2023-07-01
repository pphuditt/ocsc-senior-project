import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  ThemeProvider,
  Grid,
  Card,
  createTheme,
  colors,
  Typography,
  Divider,
  Box,
  Container,
  Button,
  Link,
} from "@mui/material";
import "../styling/navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AppleIcon from "@mui/icons-material/Apple";
import Avatar from "@mui/material/Avatar";
import { BoltRounded } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    border: "0.8px solid #e0e0e0",
    borderColor: "#e0e0e0",
    borderRadius: 4,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "24ch",
    },
  },
}));

function NavBar() {
  let navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: "Prompt",
    },
  });

  return (
    // <ThemeProvider theme={theme}>
    <header>
      <Box
        sx={{
          flexGrow: 1,
          height: "64px",
          fontFamily: "Prompt, sans-serif",
        }}
      >
        <AppBar
          position="fixed"
          elevation="0"
          sx={{
            flexGrow: 1,
            color: "#454545",
            backgroundColor: "#FFFFFF",
            margin: "0",
          }}
        >
          {/* <Container
          style={{ width: "100%", margin: "0" }}
          display="block"
          // fontWeight="400"
        > */}
          <Toolbar
            display="flex"
            position="relative"
            alignItems="center"
            style={{ paddingRight: "8%" }}
          >
            <AppleIcon
              fontSize="large"
              style={{ paddingLeft: 8, paddingRight: 16 }}
            />

            <Typography
              flexGrow="1"
              variant="h6"
              fontWeight="700"
              display="inherit"
              alignItems="center"
              style={{ marginLeft: 8, marginRight: 24 }}
            >
              Online Classroom
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="ค้นหา"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Typography>
            <div></div>
            <div
              className="menu"
              style={{
                width: "auto",
                display: "inherit",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Button color="inherit" size="small">
                <Typography
                  style={{
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: 400,
                  }}
                >
                  หน้าแรก
                </Typography>
              </Button> */}

              <Link
                component="a"
                href="/"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    color: "#9AC5F4",
                  },
                }}
              >
                <Typography
                  style={{
                    marginLeft: 8,
                    marginRight: 16,
                  }}
                >
                  หน้าแรก
                </Typography>
              </Link>

              <Link
                href="/"
                underline="none"
                color="#9AC5F4"
                sx={{
                  "&:hover": {
                    color: "#9AC5F4",
                  },
                }}
              >
                <Typography
                  style={{ fontWeight: 400, marginLeft: 16, marginRight: 16 }}
                >
                  เข้าเรียน
                </Typography>
                <div className="underline" />
              </Link>

              <Link
                component="a"
                href="/"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    color: "#9AC5F4",
                  },
                }}
              >
                <Typography
                  style={{ marginLeft: 16, marginRight: 16, fontWeight: 400 }}
                >
                  ช่วยเหลือ
                </Typography>
              </Link>
            </div>

            <div className="vertical-divider" />

            <div
              style={{
                display: "inherit",
                alignItems: "center",
              }}
            >
              <Avatar style={{ backgroundColor: "#9AC5F4" }}></Avatar>
              <Typography fontWeight="700" style={{ marginLeft: 8 }}>
                User
              </Typography>
            </div>
          </Toolbar>
          {/* </Container> */}
        </AppBar>
      </Box>
    </header>

    // {/* </ThemeProvider> */}
  );
}

export default NavBar;
