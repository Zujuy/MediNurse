import styled from "styled-components";
//COLOR PALET

export const colors={
  higlights: "#0F75BC",
  text:"#5D6D7E",
  decorations:"#09D9DC",
  light:"#FDFEFE"
}

//Navbar
export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 60px;
  family-font: "Roboto";
  background-color: ${colors.higlights};
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
    width: 30px;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin: 0;
    align-items: center;
    

  }
  li {
    transition: 0.3s all ease;
  }
  li:hover {
    border: solid ${colors.light};
    border-width: 0 0 2px 0;
  }
  a {
    color: ${colors.light};
    text-decoration: none;
  }
  a:visited {
    color: ${colors.light};
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
  color:${colors.higlights};
  margin-top: 10%;
}

label{
  color:${colors.higlights};
  padding: 5px;
}

input{
  padding: 3px;
  border: 1px solid ${colors.higlights};
}

button{
  font-size: 12px;
  border-radius: 12px;
  padding: 10px 20px;
  background-color: ${colors.higlights};
  color: white;

} 

button:hover {
  background-color: white;
  color:  ${colors.higlights};
  border: 2px solid ${colors.higlights};
}
`;

//home

export const StyledHome = styled.nav`

 .container{
   margin-top: 80px; 
 }
`

export const StyledProfile = styled.nav`


.containerprofile{
  margin-top:100px;
  width:40%;
  height:80vh;
  border-right: 2px solid ${colors.decorations};
}

img{
  margin-left:50px;
  padding: 10px;
  width:300px;
  border: 2px solid ${colors.higlights};
}

h3{
  family-font:"Roboto";
  color:${colors.higlights};
  font-size:40px;
  padding:0;
  margin:0;
  margin-left:10%;
}

h5{
  padding:0;
  family-font:"Roboto";
  color:${colors.higlights};
  font-size:15px;
  margin:0;
  margin-left:10%
}

p{
  padding:0;
  family-font:"Roboto";
  color:${colors.text};
  font-size:15px;
  margin:0;
  margin-left:10%
}
`

export const StyledAll = styled.nav`
.all{
  display:flex-container;
  display-direction:inline;
  flex-wrap:wrap;
  padding:0;
  justify-content:inline;
  margin-top:100px;
  margin-left:10%;

}
.nurses{
  display:flex-items;
  flex-direction:row;
  width:300px;
  height:100%;
  margin:0;
  padding:0;
  border-right: 2px solid ${colors.higlights};
}

.doctors{
  display:flex-items;
  flex-direction:row;
  width:40%;
  height:100%vh;
  margin:0;
  margin-left:60%;
  padding:0;
  border-left: 2px solid ${colors.higlights};
}

h2{
  width:100px;
  padding:0;
  margin:0;
  color:${colors.higlights};
}

`
