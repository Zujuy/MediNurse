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
  z-index:5;
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
`

//home

export const StyledHome = styled.nav`

 .container{
   margin-top: 80px; 
 }
`

export const StyledProfile = styled.nav`


.containerprofile{
  position:absolute;
  z-index:1;
  margin-top:100px;
  width:40%;
  height:80vh;
  border-right: 2px solid ${colors.decorations};
}

img{
  margin-left:50px;
  padding: 10px;
  width:70%;
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

.profileButtons{
  position:relative;
  z-index:2;
  margin-left:60%;

}

button{
  width:200px;
  margin-top: 30%;
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
`

export const StyledAll = styled.nav`
.all{
  margin-top:50px;

}

.nurses{
  display:inline-block;
  z-index:1;
  align-text:center;
  flex-direction:column;
  color: ${colors.higlights};
  width:50%; 
  height:50vh;
  
}

.doctors{
  display:inline-block;
  z-index:2;
  flex-direction:column;
  color: ${colors.higlights};
  width:50%;
  height:50%vh;

}

h2{
  margin-left:30px;
  text-align:justify;

}
`

export const StyledCard = styled.nav`

.card{
width:400px;
text-align:center;
border: 2px solid ${colors.decorations};
}
.header{
  justify-content:center;
  color: ${colors.higlights};
}
.body{
  color:${colors.text};
}

.cardButton{
 justify-content:center;
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


`
export const Carousel = styled.section`
  height:70vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-y: scroll;
  padding: 0 2rem;
  box-sizing: border-box;
  }
`

export const StyledPatients = styled.section`

.allpatients{
  display:flex;
  flex-direction:row;
  width:100%;
  height:50%vh;
}
h2{
  color:${colors.higlights};
  margin-top:70px;
  margin-left:30px;
  display:inline-block;
  z-index:1;
}

.card{
  display:inline-block;
  z-index:2;
  width:250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
}
`

export const StyledJustNurses = styled.section`

.allnurses{
  display:flex;
  flex-direction:row;
  width:100%;
  height:50%vh;
}
h2{
  color:${colors.higlights};
  margin-top:70px;
  margin-left:30px;
  display:inline-block;
  z-index:1;
}

.card{
  display:inline-block;
  z-index:2;
  width:250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
}
`
