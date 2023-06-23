import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logos} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true">

            </NavLink>
        </nav>
    </div>
}

export default Sidebar;