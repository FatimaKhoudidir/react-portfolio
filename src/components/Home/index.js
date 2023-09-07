import { Link } from 'react-router-dom'
import LogoF from '../../assets/images/qrF.png'
import './index.scss'
import Logo from './Logo'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


const Home =() =>{
    const[letterClass,setLetterClass]=useState('text-animate')
    const nameArray = ['a', 't', 'i', 'm','a',' ',' ', 'k', 'h', 'o', 'u', 'd', 'i', 'd', 'i', 'r' ] 
    const jobArray = ['w', 'e', 'b', ' ',' ','d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r','.']


      useEffect(()=> {
           return () => setTimeout(() => {
               setLetterClass('text-animate-hover')
          },4000)
     }, [])
    return(
        <div className="container home-page">
            <div className="text-zone">
            <h1>
               <span className={letterClass}>H</span>
               <span className={letterClass}>i,</span>
               <br/> 
               <span className={letterClass}>I</span>
               <span className={letterClass}>'m</span>
               <img src={LogoF} alt="F"/>
               <AnimatedLetters letterClass={letterClass}
               strArray={nameArray}
               idx={15}/>
               <br/>
               <AnimatedLetters letterClass={letterClass}
               strArray={jobArray}
               idx={22}/>
            </h1> 
               <h2>Backend Developer /Java passionate </h2>
               <Link to="/contact" className='flat-button'> CONTACT ME </Link>
               </div>
               <Logo/>
        </div>
    )
}
export default Home