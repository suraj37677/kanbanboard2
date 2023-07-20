import AppBar from "@mui/material/AppBar";
import "./Navigation.module.css"
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { BsCircleHalf, BsTrello } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRecoilState } from "recoil";
import { darkMode } from "../../recoil/atoms/Atoms";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';







const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const open1 = Boolean(anchorEl);
 


  const [darkModeOn, setDarkModeOn] = useRecoilState(darkMode);

  function changeMode() {
    setDarkModeOn(!darkModeOn);
  }

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };


 
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  
  const handleClose2 = () => {
    setAnchorE2(null);
  };





 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: 0 }}>
        <Toolbar
          sx={{
            backgroundColor: "#424242",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: {
              xs: "1rem",
              sm: "1rem",
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <CgMenuGridR />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
          >
            <BsTrello style={{ marginRight: "0.5rem", marginTop: "0.5rem" }} />
            Kanban
          </Typography>
         {/* this is my */}
  <div>
      <Button
        id="demo-customized-button"
        onClick={handleClick2}
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          marginLeft:"10px"
        }}
      >
        Workspaces

      </Button>
      <Menu /* Display all collaborators names */
              id="basic-menu"
              anchorEl={anchorE2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose2}>Action1</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
            </Menu>
    </div>


    <div>
      <Button
        id="demo-customized-button"
        onClick={handleClick2}
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          marginLeft:"10px"
        }}
      >
        Recent

      </Button>
      <Menu /* Display all collaborators names */
              id="basic-menu"
              anchorEl={anchorE2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose2}>Action1</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
            </Menu>
    </div>

    <div>
      <Button
        id="demo-customized-button"
        onClick={handleClick2}
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          marginLeft:"10px"
        }}
      >
        Starred

      </Button>
      <Menu /* Display all collaborators names */
              id="basic-menu"
              anchorEl={anchorE2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose2}>Action1</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
            </Menu>
    </div>

    <div>
      <Button
        id="demo-customized-button"
        onClick={handleClick2}
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          marginLeft:"10px"
        }}
      >
      Templates

      </Button>
      <Menu /* Display all collaborators names */
              id="basic-menu"
              anchorEl={anchorE2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose2}>Action1</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
              <MenuItem onClick={handleClose2}>Action</MenuItem>
            </Menu>
    </div>

    <div class="dropdown">

    <Button  type="button" data-bs-toggle="dropdown" 
    sx={{color:"white",backgroundColor:"grey", textTransform: 'none',
  }}
    >
    Create
  </Button>
  
 </div>


      {/* --------------------- */}
          <Box
            sx={{
              flexGrow: 1,
              paddingLeft: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <TextField
  type="search"
  variant="outlined"
  margin="normal"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start" sx={{ color: 'white',
    }}>
        <SearchIcon />
      </InputAdornment>
    ),
    style: { color: 'white' , height:"40px", backgroundColor:"rgb(112,112,112)"},
    placeholder: "Search",
    sx: {
      '&::placeholder': {
        color: 'white',  


      },
    },
  }}
/>


          <IconButton                                                 // this button will redirect to trello website
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              href="https://trello.com/"
              target="_blank"
              sx={{  
                transform: 'rotate(50deg)',
              }}
            >
              <Badge badgeContent={0} color="error">
              <NotificationsNoneIcon/>
            
              </Badge>
            </IconButton>
     







            <IconButton                                                 // this button will redirect to trello website
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              href="https://trello.com/"
              target="_blank"
            >
              <Badge badgeContent={0} color="error">

                <HelpOutlineIcon />
              </Badge>
            </IconButton>
            <Tooltip title={darkModeOn ? "Light mode" : "Dark mode"}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={changeMode} // set dark and light theme after clicking this function
              >
                <Badge badgeContent={0} color="error">
                  <BsCircleHalf size={20} />
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={handleClick1}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar sx={{ backgrountColor: "Orange" ,height:"35px",
             width:"35px"
            }}>RS</Avatar>

            </IconButton>
            <Menu /* Display all collaborators names */
              id="basic-menu"
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose1}>Riya singh</MenuItem>
              <MenuItem onClick={handleClose1}>suraj kumar sahoo</MenuItem>
              <MenuItem onClick={handleClose1}>Ashish Mahale</MenuItem>
              <MenuItem onClick={handleClose1}> Anshul Mishra</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}