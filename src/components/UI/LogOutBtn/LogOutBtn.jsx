'use client'
import Cookies from 'js-cookie';
import { NavbarItem } from 'keep-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogOutBtn = () => {
    const router=useRouter()
    const handelLogout=()=>{
        Cookies.remove('user-blog-token')
        router.refresh()
    }
    return (
        <div>
            <NavbarItem onClick={handelLogout} active={true}>LogOut</NavbarItem>
        </div>
    );
};

export default LogOutBtn;