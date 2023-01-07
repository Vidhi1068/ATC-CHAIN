import { Button, Navbar } from "flowbite-react";
import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";


export const navLinks = [
  { name: "Home", 
   path: "/" 
  },
  {
    name: "Product",
    path: "/Product",
  },
  {
    name: "Industries",
    path: "/Industries",
  },
  {
    name: "Video",
    path: "/Video",
  },
  {
    name: "About Us",
    path: "/About",
  },
    {
    name: "News",
    path: "/News",
  },
];

const NavBar = () => {
  return (
    <div>
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand to="/">
          <img
            src="/assets/images/logo/Logo-dark.png"
            className="mr-3 h-10 sm:h-9"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-btn-primary">Contact Us</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((item,i)=>(
            <Navbar.Link  key={i} active={true}><Link href={item.path}>{item.name}</Link></Navbar.Link>

          ))}
      
        </Navbar.Collapse>
      </Navbar>

      
    </div>
  );
};

export default NavBar;
