import React from "react";
import { H2Styled, StyledFielset, StyledP } from "../Styleds/CertificacionesStyled";

export const Certificaciones = () =>{
    return(
        <div>
            <StyledFielset>
                <H2Styled name="Certificaciones" />
                    <div className="Education-container">
                        <div className="Edication-item">
                            <StyledP>Bachiller</StyledP>
                        </div>
                    </div>
                </StyledFielset>
        </div>
    )
}