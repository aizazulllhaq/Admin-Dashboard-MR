import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import {
  AdminPanelSettings,
  CalendarMonth,
  ChevronLeft,
  ChevronRight,
  Groups2,
  Home,
  PieChart,
  PointOfSale,
  Public,
  ReceiptLong,
  Settings,
  ShoppingCart,
  Today,
  TrendingUp,
} from "@mui/icons-material";

const navItems = [
  {
    text: "Dashboard",
    icon: <Home />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCart />,
  },
  {
    text: "Customers",
    icon: <Groups2 />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLong />,
  },
  {
    text: "Geography",
    icon: <Public />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSale />,
  },
  {
    text: "Daily",
    icon: <Today />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonth />,
  },
  {
    text: "Breakdown",
    icon: <PieChart />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettings />,
  },
  {
    text: "Performance",
    icon: <TrendingUp />,
  },
];

const Sidebar = ({
  user,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
  drawerWidth,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();


  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component={"nav"}>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width={"100%"}>
            <Box m={"1.5rem 2rem 2rem 3rem"}>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    METAKLOUD
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRight sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box position={"absolute"} bottom={"2rem"}>
            <Divider />
            <FlexBetween
              textTransform={"none"}
              gap={"1rem"}
              m="1.5rem 2rem 0 3rem"
            >
              <Box
                component={"img"}
                alt="profile"
                src={
                  "https://media.istockphoto.com/id/1458146093/photo/cosmonaut-alien.jpg?s=1024x1024&w=is&k=20&c=KDcidDxd6RrKf4TktoU6kKh5nLRWJb7GETDliCFJ1NI="
                }
                height={"40px"}
                width={"40px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
                <Box textAlign={"left"}>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={"0.9rem"}
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name && user.name}
                  </Typography>
                  <Typography
                    fontSize={"0.8rem"}
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.occupation && user.occupation}
                  </Typography>
                </Box>
                <Settings
                  sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
