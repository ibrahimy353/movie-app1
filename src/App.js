import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=d00edc8e486cd903348d22749de24834";
function App() {
  
  const[movies,setMovies]=useState([]);
  
  useEffect (()=> {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{ 
      console.log(data)
      setMovies(data.results);
    })

  }, [])



  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="">Ibra'S MovieDb App</Navbar.Brand>
         <Navbar.Brand href="">Trending</Navbar.Brand>
         <Navbar.Brand href="">Latest</Navbar.Brand>
          <NavbarToggle aria-controls="navbarscroll">
          
            <NavbarCollapse id="navbarScroll">
              <Nav
               className="me-auto my-2 my-lg-3"
               style={{maxHeight:'100px'}}
               navbarScroll>
              </Nav>

              <form className="d-flex">

                <FormControl
                type="search"
                placeholder="Movie-Search"
                className='me-2'
                aria-lable="search"
                name=""></FormControl>
              </form>

            </NavbarCollapse>
          </NavbarToggle>
      </Container>

    </Navbar>
     
     
    <div className='container'>
      <div className='grid'>
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
    </div>
    
  </>
  );
}

export default App;
