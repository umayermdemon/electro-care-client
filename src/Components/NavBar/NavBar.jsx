import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
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
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (
    <MenuItem className="flex flex-col  gap-3 rounded-lg bg-white">
      <Link to="/addService" color="red">
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Add Service
        </Button>
      </Link>
      <Link to="/addService">
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Manage Service
        </Button>
      </Link>
      <Link to="/addService">
        <Button className="w-44 p-4 text-black bg-[#FBA529]">
          Booked Services
        </Button>
      </Link>
      <Link to="/addService">
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
      <NavListMenu />
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
      <Navbar className="mx-auto sticky top-0  z-50 rounded-none bg-[#1C2430] max-w-full shadow-none  px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer text-3xl text-white py-1.5 font-bold"
          >
            <span className="text-[#FBA529]">Electro</span>Care
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button
                size="sm"
                variant="text"
                className="hidden text-white lg:inline-block"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button
                size="sm"
                variant="text"
                className="hidden text-white lg:inline-block"
              >
                <span>Register</span>
              </Button>
            </Link>
            
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
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Register</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
