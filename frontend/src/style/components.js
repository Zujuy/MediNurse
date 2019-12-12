import styled from "styled-components";

//Navbar
export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  family-font: "Roboto";
  background-color: #EBFFFF;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  top: 0;
  box-shadow: 0 4px 4px -4px rgba(0,0,0,.2);
  
  img {
    margin: 0;
    padding: 5px 5px 5px 10px;
    width: 50px;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin: 0;
    align-items: center;
    position: sticky;

  }
  li {
    transition: 0.3s all ease;
  }
  li:hover {
    border: solid #0F75BC;
    border-width: 0 0 2px 0;
  }
  a {
    color: #09D9DC;
    text-decoration: none;
  }
  a:visited {
    color: #0F75BC;;
  }
`;

// login
export const StyledForms = styled.nav`
form{
  display:flex;
  position:fixed;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 5%;
  margin-left: 5%;
  margin: solid 2px #0F75BC;
  
}

h2{
  color:#0F75BC;
  margin-top: 15%;
  margin-left: 20%;
}

label{
  color:#0F75BC;
}
`;