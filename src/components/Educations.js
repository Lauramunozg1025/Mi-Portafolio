import React from "react";
import { H2Styled, StyledFielset, StyledH4, StyledP } from "../Styleds/EducationStyled";

export const Education = () =>{
    return(
        <div>
        <StyledFielset>
            <H2Styled name="Mis Estudios" />
                <div className="Education-container">
                    <div className="Edication-item">
                        <StyledH4> I.E San Agustin - 2021 </StyledH4>
                        <StyledP>Bachiller</StyledP>
                    </div>
                    <div className="Edication-item">
                        <StyledH4> Pacual Bravo - 2021 </StyledH4>
                        <StyledP>Tecnica Laboral en Auxiliar en Desarrollo de Software</StyledP>
                    </div>
                </div>
            </StyledFielset>
        </div>
    )
}