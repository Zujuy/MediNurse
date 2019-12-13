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
.formstyle{
  width:100vw;
  height:100vh;
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  flex-flow:row-wrap;
  align-items: center;
  background-image:url("../../back.jpg");
  
  
}

h2{
  display:flex;
  margin-top: 5%;
  color:#0F75BC;
  margin-top: 10%;
}

label{
  color:#0F75BC;
  padding: 5px;
}

input{
  padding: 3px;
  border: 1px solid #0F75BC;
}

button{
  font-size: 12px;
  border-radius: 12px;
  padding: 10px 20px;
  background-color: #0F75BC;
  color: white;

} 

button:hover {
  background-color: white;
  color:  #0F75BC;
  border: 2px solid #0F75BC;
}
`;




