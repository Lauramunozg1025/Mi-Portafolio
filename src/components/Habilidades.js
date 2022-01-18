import React from "react";
import { H2Styled, StyledFielset, DivSlide, StyledP, StyledSlide } from "../Styleds/HabilidadesStyle";

export const Habilidades = () =>{
    return(
        <div>
            <StyledFielset>
                <H2Styled name="Habilidades" />
                    <div className="Education-container">
                        <div className="Edication-item">
                            <DivSlide>
                                <div class="slidecontaine">
                                    <StyledP>HTML</StyledP>
                                    <StyledSlide type="range" id="rango" min="1" max="20" value="10" ></StyledSlide>
                                </div>
                                <div class="slidecontaine">
                                    <StyledP>CSS</StyledP>
                                    <StyledSlide type="range" id="rango" min="1" max="20" value="12"  ></StyledSlide>
                                </div>
                                <div class="slidecontaine">
                                    <StyledP>JavaScript</StyledP>
                                    <StyledSlide type="range" id="rango" min="1" max="20" value="8" ></StyledSlide>
                                </div> 
                            </DivSlide>
                                 <div class="slidecontaine">
                                    <StyledP>ReactJS</StyledP>
                                    <StyledSlide type="range" id="rango" min="1" max="20" value="6" ></StyledSlide>
                                </div>
                        
                        </div>
                    </div>
                </StyledFielset>
        </div>
    )
}