import { useState } from "react"
import backgroundImage from "./assets/yellow.webp"
// import "./App.css"

function HomePage() {
  return (
    <div style={styles.homeInlineBox}>
      <h2>Hello,</h2>

      <span style={styles.textcolorBlue}>I AM AKBAR</span>

      <h2 style={styles.textcolorOrange}>
        SYSTEM ENGINEER
      </h2>

      <p>
        Aspiring System Engineer with over 4 years of experience delivering
        ERP and IoT solutions tailored to the aluminum manufacturing sector.
        Proficient in Microsoft SQL Server, Node-RED, and JavaScript, with a
        strong passion for DevOps practices, cloud technologies, CI/CD
        pipelines, monitoring, and infrastructure automation.
      </p>
    </div>
  )
}

function EducationPage() {
  return (
    <div style={styles.homeInlineBox2}>
      <h2 style={styles.textcolorOrange}>EDUCATION</h2>

      <p>○ BACHELOR IN ENGINEERING TECHNOLOGY IN MECHATRONICS</p>
      <p>○ UNIVERSITI KUALA LUMPUR-MFI</p>
      <p>○ CERTIFIED AWS CLOUD PRACTITIONER</p>
    
    </div>
  )
}

function ProjectPage() {
  return (
    <div style={styles.homeInlineBox2}>
      <h2 style={styles.textcolorOrange}>PROJECTS</h2>

      <p>1. CHEMICAL ANALYSIS</p>
      <p>2. FMS ALERTING SYSTEM</p>
      <p>3. QR-CODE GENERATOR</p>
    </div>
  )
}

function SkillsPage() {
  return (
    <div style={styles.homeInlineBox2}>
      <h2 style={styles.textcolorOrange}>SKILLS</h2>

      <p>1. Microsoft SQL Server</p>
      <p>2. Node-red</p>
      <p>3. Javascript</p>
      <p>4. React.Js</p>
    </div>
  )
}


export default function App() {

  // Home page appears first
  const [activePage, setActivePage] = useState("home")

  return (
    <div style={styles.image}>

      <h2>AKBAR BIN NAZLI</h2>

      <div style={styles.container}>

        <button
          style={styles.button}
          onClick={() => setActivePage("home")}
        >
          Home
        </button>

        <button
          style={styles.button}
          onClick={() => setActivePage("education")}
        >
          Education
        </button>

        <button
          style={styles.button}
          onClick={() => setActivePage("projects")}
        >
          Projects
        </button>

        <button
          style={styles.button}
          onClick={() => setActivePage("skills")}
        >
          Skills

        </button>

      </div>

      {/* Only selected page will appear */}

      {activePage === "home" && <HomePage />}

      {activePage === "education" && <EducationPage />}

      {activePage === "projects" && <ProjectPage />}

      {activePage === "skills" && <SkillsPage />}


    </div>
  )
}

const styles = {

  container: {
    backgroundColor: "#dfa220",
    padding: "10px",
    display: "flex",
    gap: "10px",
  },

  button: {
    backgroundColor: "#d6a843",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    transform: "translateY(-3px)",
    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.4)",
  },

  canvasLayout: {
    backgroundColor: "#a3651f",
  },

  homeInlineBox: {
    display: "inline-block",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    minHeight: "350px",
    width: "600px",
    backgroundColor: "#f5f8f7",
    marginTop: "30px",
    marginLeft: "5px",
    textAlign: "left",
  },

  homeInlineBox2: {
    display: "inline-block",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    minHeight: "150px",
    width: "600px",
    backgroundColor: "#f5f8f7",
    marginTop: "30px",
    marginLeft: "5px",
    textAlign: "left",
  },

  textcolorBlue: {
    color: "blue",
  },

  textcolorOrange: {
    color: "orange",
  },

  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "100vh",
  },
}