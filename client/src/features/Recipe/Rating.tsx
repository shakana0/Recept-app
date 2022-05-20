import StarOutlineIcon from "@mui/icons-material/StarOutline";
import styled from "styled-components";

const RatingStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.devider{
    border-top: 1px solid white;
    width: 60%;
  }
  .icons > *{
    font-size: 2rem;
    margin: 0 .4rem;
    &:hover{
      color: #ffca0a;
    }
  }
`

export const Rating = () =>{
    return (
        <>
       <RatingStyle>
                <h1>Vad tyckte du om receptet?</h1>
                <section className="rating-sec">
                  <div className="devider"></div>
                  <p>Klicka på en stjärna för att ge betyg</p>
                  <div className="icons">
                    <StarOutlineIcon /> 
                    <StarOutlineIcon /> 
                    <StarOutlineIcon />
                    <StarOutlineIcon /> 
                    <StarOutlineIcon />
                  </div>
                  <div className="devider"></div>
                </section>
              </RatingStyle>
        </>
    )
}