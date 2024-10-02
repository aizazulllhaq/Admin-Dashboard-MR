import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import {
  ArrowDropDown,
  DarkMode,
  DarkModeOutlined,
  LightMode,
  Search,
  Settings,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import { useState } from "react";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu />
          </IconButton>

          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius={"9px"}
            gap={"3rem"}
            p={"0.1rem 1.5rem"}
          >
            <InputBase placeholder="Search...." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* right side  */}
        <FlexBetween gap={"1.5rem"}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <Settings sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component={"img"}
                alt="profile"
                src={
                  "https://media.istockphoto.com/id/1458146093/photo/cosmonaut-alien.jpg?s=1024x1024&w=is&k=20&c=KDcidDxd6RrKf4TktoU6kKh5nLRWJb7GETDliCFJ1NI="
                }
                height={"30px"}
                width={"30px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.85rem"}
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name && user.name}
                </Typography>
                <Typography
                  fontSize={"0.75rem"}
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.occupation && user.occupation}
                </Typography>
              </Box>
              <ArrowDropDown
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
