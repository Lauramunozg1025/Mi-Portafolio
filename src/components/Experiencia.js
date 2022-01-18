import React from "react";
import { H2Styled, StyledFielset, StyledP } from "../Styleds/ExperienciaStyled";

export const Experiencia = () => {
    return (
        <div>
            <StyledFielset>
                <H2Styled name="Experiencia" />
                    <div className="Education-container">
                        <div className="Edication-item">
                            <StyledP>Ninguna experiencia Laboral</StyledP>
                        </div>
                    </div>
            </StyledFielset>
        </div>
    )
}