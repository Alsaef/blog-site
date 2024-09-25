import Image from 'next/image'
import {
  Avatar,
  AvatarImage,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react'
import Link from 'next/link';
import { authServer } from '@/util/Getuser/AuthServer';
import dynamic from 'next/dynamic';

const NavBar = () => {
  const user= authServer()
  const LogOutBtn = dynamic(() => import('../UI/LogOutBtn/LogOutBtn'), { ssr: false })
 
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
            {
              user&&<Avatar>
       
              <Image className='rounded-2xl' width={50} height={50} alt={user?.name} src={user?.photo} title={user?.name} />
            
           </Avatar>
            }
          </NavbarList>
          <NavbarList>
           {
            !user?<> <Link href='/login'><NavbarItem active={true}>Log In</NavbarItem></Link></>:<LogOutBtn></LogOutBtn>
           }
          
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            {nav}
            {
           !user?<> <Link href='/login'><NavbarItem active={true}>Log In</NavbarItem></Link></>:<LogOutBtn></LogOutBtn>
           }
             {
              user&&<Avatar>
       
              <Image className='rounded-2xl' width={50} height={50} alt={user?.name} src={user?.photo} title={user?.name} />
            
           </Avatar>
            }
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  );
};

export default NavBar;