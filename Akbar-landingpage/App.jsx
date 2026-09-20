import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function HomePage(){
  return(<>
      <div style={styles.homeInlineBox}>
        <h2>Hello,</h2>
        <text style={styles.textcolorBlue}>I AM AKBAR</text>
          <h2 style={styles.textcolorOrange}>SYSTEM ENGINEER</h2>
        <text> Aspiring System Engineer with over 4 years of experience delivering ERP and
          IoT solutions tailored to the aluminum manufacturing sector. Proficient in
          Microsoft SQL Server, Node-RED, and JavaScript, with a strong passion for
          DevOps practices, cloud technologies, CI/CD pipelines, monitoring, and infrastructure automation.
        </text>
  </div>
  </>)
}

function EducationPage(){
  return(<>
  <div style={styles.homeInlineBox2}>
    <h2>Certification</h2>
      <text>BACHELOR IN ENGINEERING TECHNOLOGY IN MECHATRONICS </text>
        <text>UNIVERSITI KUALA LUMPUR-MFI</text>
      <> </>
      <text>CERTIFIED AWS CLOUD PRACTITIONER</text>
      <> </>
        <text>AMAZON WEB SERVICES</text>
  </div>
  
  </>)
}

function ProjectPage(){
  return(<>
  <div style={styles.homeInlineBox2}>
    <h2 style={styles.textcolorOrange}>PROJECT</h2>
      <text>1. CHEMICAL ANALYSIS </text>
      <text>2. FMS ALERTING SYSTEM</text>
      <text>3. QR CODE_GENERATOR</text>
      <> </>
  </div>
  
  </>)
}

export default function App(){
  return(
  <>
  <div >
    <h2>AKBAR BIN NAZLI</h2>  
    <div style={styles.container}>
    <button style={styles.button }  >Home</button>
    <>  </>
    <button style={styles.button} >Education</button>
    <>  </>
    <button style={styles.button}>Projects</button>
    </div>
    <HomePage/>
    <EducationPage/>
    <ProjectPage/>
  </div>
  </>)
}

const styles = {
  container:{
    backgroundColor: '#84d9ee',
  },

  button:{
    backgroundColor: '#84d9ee',
    border : 'none',
    transform: 'translateY(-3px)',/* Lifts the button up */
    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.4)', /* Adds glow */

  },
  canvasLayout:{
    backgroundColor: '#e4c39e',
  },

  homeInlineBox:{
      display: 'inline-block', 
      border: '1px solid black',
      borderRadius:'5px', 
      padding: '10px',
      height:350,
      width:600,
      backgroundColor: '#f5f8f7',
      marginTop :'30px' ,
      marginLeft:'5px',
      marginRight: '100',
      textAlign:'left'
      
  },
  homeInlineBox2:{
      display: 'inline-block', 
      border: '1px solid black',
      borderRadius:'5px', 
      padding: '10px',
      height:150,
      width:600,
      backgroundColor: '#f5f8f7',
      marginTop :'30px' ,
      marginLeft:'5px',
      marginRight: '100',
      textAlign:'left'
      
  },
  textcolorBlue:{
    color: 'Blue',
  },
  textcolorOrange:{
    color: 'Orange',
  }

}