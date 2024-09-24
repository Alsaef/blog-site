import Image from 'next/image'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react'
import Link from 'next/link';
import { cookies } from 'next/headers';

const NavBar = () => {
  const token= cookies().get('user-blog-token')
  const nav = <>
    <NavbarItem><Link href='/'>Home</Link></NavbarItem>
    <NavbarItem><Link href='/blogs'>Blogs</Link></NavbarItem>
    <NavbarItem><Link href='/contact'>Contact</Link></NavbarItem>
  </>
  return (
    <div>
      <Navbar className='bg-black px-3'>
        <NavbarContainer>
          <NavbarBrand>
          <h2 className='text-3xl font-semibold text-white ps-3'>SUM BLOGs</h2>
          </NavbarBrand>
          <NavbarList>
            {nav}
          </NavbarList>
          <NavbarList>
           {
            !token?<> <Link href='/login'><NavbarItem active={true}>Log In</NavbarItem></Link></>:<NavbarItem active={true}>LogOut</NavbarItem>
           }
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            {nav}
            {
           !token?<> <Link href='/login'><NavbarItem active={true}>Log In</NavbarItem></Link></>:<NavbarItem active={true}>LogOut</NavbarItem>
           }
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  );
};

export default NavBar;