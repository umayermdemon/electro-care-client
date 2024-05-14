import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  MobileNav,
  Navbar,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

function ProfileMenu() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };

  const { displayName, photoURL } = user;

  return (
    <Tooltip content={displayName}>
      <Menu>
        <MenuHandler>
          {user?.photoURL ? (
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile Image"
              className="cursor-pointer"
              src={photoURL}
            />
          ) : (
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile Image"
              className="cursor-pointer"
              src="https://i.ibb.co/ZWrTthm/About-User.jpg"
            />
          )}
         
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center gap-2 ">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                fill="#90A4AE"
              />
            </svg>
            <Typography
              onClick={handleLogout}
              variant="small"
              className="font-medium"
            >
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </Tooltip>
  );
}

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (
    <MenuItem className="flex flex-col  gap-3 rounded-lg">
      <Link to="/addService" >
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Add Service
        </Button>
      </Link>
      <Link to="/manageService">
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Manage Service
        </Button>
      </Link>
      <Link to="/bookedServices">
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Booked Services
        </Button>
      </Link>
      <Link to="/serviceToDo">
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Services-To-Do{" "}
        </Button>{" "}
      </Link>
    </MenuItem>
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="md" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Dashboard
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          {renderItems}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user } = useContext(AuthContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#FBA529] border border-[#FBA529] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="p-1 font-normal">Home</Typography>
      </NavLink>
      {
        user&& <NavListMenu />
      }
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-[#FBA529] border border-[#FBA529] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="p-1 font-normal">Services</Typography>
      </NavLink>
    </ul>
  );

  return (
    <div className="bg-[#1C2430]">
      <Navbar className="mx-auto sticky top-0  z-50 rounded-none border-none bg-[#1C2430] max-w-full shadow-none  px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer text-3xl text-white py-1.5 font-bold"
          >
            <span className="text-[#FBA529]">Electro</span>Care
          </Typography>
          <div className="hidden lg:block">{navList}</div>

          <div className="hidden lg:block">
            {user ? (
              <ProfileMenu />
            ) : (
              <>
                <Link to="/login">
                  <Button size="sm" variant="text">
                    <span className="text-white text-sm">Log In</span>
                  </Button>
                </Link>

                <span className="text-white">/</span>
                <Link to="/register">
                  <Button
                    size="sm"
                    variant="text"
                    className="hidden text-white lg:inline-block"
                  >
                    <span>Register</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
              {user ? (
                <div className="flex w-full flex-row justify-end">
                  <ProfileMenu />
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      fullWidth
                      variant="text"
                      size="sm"
                      className="text-white"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      fullWidth
                      variant="gradient"
                      size="sm"
                      className="text-white"
                    >
                      <span>Register</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
