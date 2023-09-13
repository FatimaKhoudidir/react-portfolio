import './index.scss'
import logo from '../../../assets/images/Logo.jpeg' 



const  Logo = () => {
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={logo}/>
            
         
        </div>
    )
}

export default Logo