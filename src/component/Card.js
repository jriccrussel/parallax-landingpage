import styled from 'styled-components'

const Card = ({ title, text, link, className }) => {
    return (
        <div className={className}>        
            <h5>{title}</h5>
            <p>{text}</p>
            <a href="#">{link}</a>
        </div>
    )
}

const Wrapper = styled(Card)`
  width: 23.3%;
  border: 1px solid rgba(255,255,255,0.1);
  height: 220px;
  -webkit-transition: 1s !important;
  position: relative;
  min-height: 1px;
  padding: 0 15px;
  @media only screen and (max-width: 990px){
    width: 100%;
  }

  h5{
    color: #fff;
    font-family: "Poppins";
    margin: 48px 0 2px 4px;
    font-size: 16px;

    &::before{
      position: absolute;
      content: "";
      top: 50px;
      left: -2px;
      width: 2px;
      height: 22px;
      display: block;
      background: #fff;
    }
  }

  p{
    color: grey;
    margin-left: 4px;
    font-size: 14px;
    margin-bottom: 70px !important;
  }

  a{
    margin-left: 4px;
    color: lightgrey !important;
    font-family: Poppins;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;

    &:hover{
      text-decoration: none !important;
      color: grey !important;
    }
  }

`
export default Wrapper

