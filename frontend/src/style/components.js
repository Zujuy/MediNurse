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
  button{
    background-color: ${colors.higlights};
    font-size:16px;
    color:${colors.light};
    transition: 0.3s all ease;
    border:0;
    
  }
  button:hover{
    border: solid ${colors.light};
    border-width: 0 0 2px 0;
  }
`;

// login
export const StyledForms = styled.nav`
width:100vw;
height:100vh;
background-image:url("../../back.jpg");
display:flex;
flex-direction: column;
align-items: center;

.formstyle > div{
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding:5px;
}

h2{
  display:flex;
  margin-top: 5%;
  color:${colors.higlights};
  margin-top:100px;
}

form{
  max-width:50%;
  margin:0 auto;
}

label{
  color:${colors.text}
}

input{
  width:600px;
  padding: 14px;
  border:solid 2px ${colors.higlights};
  margin-bottom: 5px;
  border-radius: 10px;
  font-size:14px;
  color:${colors.text}
}

select{
  width:600px;
  padding: 18px;
  border:solid 2px ${colors.higlights};
  margin-bottom: 5px;
  border-radius: 10px;
  font-size:14px;
  color:${colors.text}
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

export const StyledHome = styled.section`

 .container{
   margin-top: 80px; 
 }
`

export const StyledProfile = styled.section`

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

.profilelinks{
  position:absolute;
  z-index:2;
  width:40%;
  margin-top:100px;
  margin-left:50%;
}


h4{
  font-size: 20px;
  padding: 10px 20px;
  color:${colors.light};
  background-color:${colors.higlights};
  text-align:center;
  display:space-between;
  border: solid 2px ${colors.higlights};
}

h4:hover{
  color:${colors.higlights};
  background-color:${colors.light};
  border: solid 2px ${colors.higlights};
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
export const StyledPatientprofile = styled.section`

.containerprofile{
  position:absolute;
  z-index:1;
  margin-top:100px;
  width:40%;
  height:100vh;
  border-right: 2px solid ${colors.decorations};
}
.containerinfo{
  position:absolute;
  z-index:2;
  margin-top:100px;
  margin-left:50%;
  width:40%;
  height:100%;
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


.profileButtons{
  position:relative;
  z-index:2;
  margin-left:60%;

}

button{
  width:200px;
  font-size: 12px;
  border-radius: 12px;
  padding: 10px 20px;
  background-color: ${colors.higlights};
  color: white;
  margin-left:40%;
}

button:hover {
  background-color: white;
  color:  ${colors.higlights};
  border: 2px solid ${colors.higlights};
}

li{
  padding:0;
  family-font:"Roboto";
  color:${colors.text};
  font-size:15px;
  margin:0;
  margin-left:10%
}
`
export const StyledSheet =  styled.form`
width:100%;
height:100%;
margin-top:100px;
display:flex;
flex-direction: column;
align-items: center;


  .form-group > div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding:5px;
  }

  form{
    max-width:50%;
    margin:0 auto;
  }

  label{
    color:${colors.text};
  }

  h1{
    color:  ${colors.higlights};
    text-align: center;
  }

  p{
    color:  ${colors.higlights};
    text-align: center;
  }

  input{
    width:600px;
    padding: 14px;
    border:solid 2px ${colors.higlights};
    margin-bottom: 5px;
    border-radius: 10px;
    font-size:14px;
    color:${colors.text}
  }

  button{
    flex-wrap: wrap;
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

