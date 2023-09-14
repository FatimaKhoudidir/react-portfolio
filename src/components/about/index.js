import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import { useEffect, useState } from 'react'

const About = () => {
    const[letterClass,setLetterClass]=useState('text-animate')
    useEffect(()=> {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
       },4000)
  }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o','u', 't',' ','m','e','.']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am a fifth-year software engineering student actively seeking an internship 
                    opportunity to complete my final year project (PFE).
                    My journey in the field of software engineering has been fueled by an unwavering
                     passion for emerging technologies and a deep-seated love for tackling challenges and solving problems.
                </p>
                <p>
                Throughout my academic journey, I have honed my technical skills and developed a keen problem-solving mindset. 
                I am committed to staying at the forefront of the ever-evolving tech landscape
                 and thrive on the opportunity to apply my knowledge to real-world projects.
                </p>
                <p>
                I believe in the power of innovation and the potential of technology to drive positive change.
                 I am excited to contribute my skills, creativity,
                  and determination to a dynamic team, 
                  and I look forward to taking on new challenges and making a meaningful impact in the world of technology
                </p>
            </div>
        </div>
    )
}

export default About