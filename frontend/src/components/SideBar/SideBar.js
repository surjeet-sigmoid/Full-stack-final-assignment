import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const SideBar = () => {
  return (
    <Box
      borderRight="1px solid black"
      height="92vh"
      display="flex"
      flexDirection="column"
      sx={{ p: "1rem" }}
      gap="1rem"
    >
      <Box display="flex" flexDirection="row" gap="1rem" justifyContent="start">
        <MenuIcon />
        <Typography>Menu</Typography>
      </Box>
      <Button
        sx={{ justifyContent: "start", textTransform: "initial" }}
        variant="contained"
        startIcon={<AddBoxIcon color="primary" />}
        color="btnColor"
        padding="0rem"
      >
        <Typography color="primary">Query Data</Typography>
      </Button>
      <Button
        sx={{ justifyContent: "start", textTransform: "initial" }}
        variant="contained"
        startIcon={<LibraryBooksOutlinedIcon color="primary" />}
        color="btnColor"
      >
        <Typography color="primary">Saved Queries</Typography>
      </Button>
    </Box>
  );
};

export default SideBar;
