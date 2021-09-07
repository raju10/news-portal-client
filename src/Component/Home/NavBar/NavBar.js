// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// function NavBar(props) {
//   const { window } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <Link to="/news">
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="mailbox folders">
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Hidden smUp implementation="css">
//           <Drawer
//             container={container}
//             variant="temporary"
//             anchor={theme.direction === "rtl" ? "right" : "left"}
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden xsDown implementation="css">
//           <Drawer
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             variant="permanent"
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </nav>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//           dolor purus non enim praesent elementum facilisis leo vel. Risus at
//           ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
//           quisque non tellus. Convallis convallis tellus id interdum velit
//           laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
//           adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//           integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//           eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//           quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//           vivamus at augue. At augue eget arcu dictum varius duis at consectetur
//           lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
//           faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//           ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//           elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
//           sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
//           mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
//           risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
//           purus viverra accumsan in. In hendrerit gravida rutrum quisque non
//           tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
//           morbi tristique senectus et. Adipiscing elit duis tristique
//           sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </main>
//     </div>
//   );
// }

// NavBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default NavBar;
// //////////////////////////

////////////////////////////

import React, { useContext } from "react";
import { FaNewspaper, FaHome, FaCalendar, FaShoePrints } from "react-icons/fa";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
import { UseProductContext } from "../../../App";
import "./NavBar.css";
const NavBar = () => {
  const [news, setNews] = useContext(UseProductContext);
  return (
    <div>
      <SideNav
        classname="sidenav"
        style={{ background: "#0288d1", position: "fixed" }}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Link to="/home">
                {" "}
                <FaHome style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          {/* news part open */}
          <NavItem eventKey="news">
            <NavIcon>
              {" "}
              <FaNewspaper style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>

            <NavText>News</NavText>
            <NavItem eventKey="charts/barchart">
              {" "}
              <NavText>
                {" "}
                <Link to="/all-news/news">All News </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/bangladesh">Bangladesh </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* news part close */}
          {/* sports part open */}
          <NavItem eventKey="sports">
            <NavIcon>
              {" "}
              <FaShoePrints style={{ fontSize: "1.75em" }} />{" "}
            </NavIcon>

            <NavText>Sports</NavText>
            <NavItem eventKey="charts/barchart">
              {" "}
              <NavText>
                {" "}
                <Link to="/all-news/sports">All Sports </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/cricket">Ckicket </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/football">Football </Link>
              </NavText>{" "}
            </NavItem>
            <NavItem eventKey="charts/linechart">
              {" "}
              <NavText>
                {" "}
                <Link to="/news/tenis">Tenis </Link>
              </NavText>{" "}
            </NavItem>
          </NavItem>
          {/* news part close */}
          <NavItem eventKey="admain">
            <NavIcon>
              <Link to="/admain">
                {" "}
                <FaCalendar style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>Admain</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default NavBar;
