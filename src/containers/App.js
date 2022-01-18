import React from "react";
import styled from "styled-components";
import About from "../components/About";
import { Education } from "../components/Educations";
import { Experiencia } from "../components/Experiencia";
import { Certificaciones } from "../components/Certificaciones";
import { Habilidades } from "../components/Habilidades";

const StyledDiv = styled.div`
    display: flex;
    margin: 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: system-ui;
    color: #f2f5ff;
    font-size: 2em;
    text-shadow: 1px 1px rgba(0,0,0,.5);
    
`

const App = () => {
    return(
        <StyledDiv>
           <About />
           <div>
                <Education />
                <Experiencia />
                <Certificaciones />
                <Habilidades />
           </div>
            
        </StyledDiv>

    )
}

export default App