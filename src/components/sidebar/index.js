import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/qrF.png'
import LogoSub from '../../assets/images/nameLogo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/' >
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSub} alt="logo"/>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color = "#FF5F9E"/>

        </NavLink>
 
        <NavLink exact="true" activeclassname="active"className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color = "#FF5F9E"/>

        </NavLink>
    
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color = "#FF5F9E"/>

        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/fatimakhoudidir- 55204'>
                <FontAwesomeIcon icon={faLinkedin} color='#FF5F9E'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/fatimakhoudidir- 55204'>
                <FontAwesomeIcon icon={faGithub} color='#FF5F9E'/>
            </a>
        </li>
    </ul>


  

</div>
)



export default sidebar