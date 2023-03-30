import React, {useState, useRef, useEffect} from 'react';
import '../../App.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [menuRef]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const getPosition = () => {
        if (!menuRef.current) return {};
        const parent = menuRef.current.parentElement?.getBoundingClientRect();
        return {
          top: `${parent?.bottom}px`,
          left: `${parent?.left}px`,
        };
      };
    
    const position = getPosition();

    return(
        <>
            <header className='relative justify-start text-lg w-full py-5 font-retro'>
                <div className='font-retro'>
                    <Link to='/home'>
                        <button className='p-4 pl-12 px-6'>Home</button>
                    </Link>
                    <Link to='/about'>
                        <button className='p-4 px-6'>About</button>
                    </Link>

                    <button className='p-4 px-6' onClick={toggleMenu}>Portfolio</button>
                    {showMenu && (
                        <ul className='fixed z-10 bg-transparent py-2'
                            ref={menuRef}
                            style={position}>
                            <li>
                                <Link to='/fullstack' className='block px-4 py-2'>
                                    Full-Stack
                                </Link>
                            </li>
                            <li>
                                <Link to='/backend' className='block px-4 py-2'>
                                    Back-End
                                </Link>
                            </li>
                        </ul>
                        )
                    }
                    <Link to='/contact'>
                        <button className='p-4 px-6'>Contact</button>
                    </Link>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header