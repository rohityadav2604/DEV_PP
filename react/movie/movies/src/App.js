import { div } from "prelude-ls";
import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar.jsx";
import Search from "./Search"
import Table from "./Table"
import Pagination from "./Pagination";
class App extends React.Component
{
    state = {
        movies:[],
        genre:[],
        selectedfilter:"All Genre",
        page:12,
        search :""
    }

    updateSearch = (value)=>{
      
        this.setState({search : value})
    }
    setFilter=(filter)=>{
      this.setState({selectedfilter : filter}) 
    }
    toggleLike = (id)=>{
       let index = this.state.movies.findIndex((el)=>{
              return el._id==id;
       });

    
      
       let currMoviesArr = this.state.movies.map((el)=>{
         return el;
       })
       if(currMoviesArr[index].liked)
       {
           currMoviesArr[index].liked=false;
       }
       else{
         currMoviesArr[index].liked=true;
       }
       
       this.setState({movies: currMoviesArr});
    }

    deleteMovie = (id)=>
    {
      // let index = this.state.movies.findIndex((el)=>{
      //         return el._id == id;
      // })
      let filterdarr = this.state.movies.filter((el)=>{
           return el._id!==id;
      })
     
      this.setState({movies:filterdarr});
     
    }

   getPage = (number)=>{
     //console.log(number);
     this.setState({page:number});

   }


    componentDidMount()
    {
      let f = async()=>{
        let responseGenre = await fetch("http://localhost:4000/genre");
        let responseMovies = await fetch("http://localhost:4000/movies");
        let moviesJson = await responseMovies.json();
        let genreJson = await responseGenre.json();

        this.setState({
          movies: moviesJson,
          genre:genreJson,
        })
      }
      f();
      
    }
   render()
   {
     return <div>
          <Navbar/>;
           <div className =" row">
                 <Filter handleFilter = {this.setFilter} selectedFilter = {this.state.selectedfilter} genreData = {this.state.genre}/>
                 <div class ="col-9 p-4">
                        <Search
                        updateSearch = {this.updateSearch}
                        />
                        <Table  
                        
                        selectedFilter = {this.state.selectedfilter}
                         moviesData = {this.state.movies}
                         toggleLike = {this.toggleLike}
                         deleteMovie = {this.deleteMovie}
                         pageNumber = {this.state.page}
                         search = {this.state.search}
                         />
                        <Pagination
                             getPage = {this.getPage}
                        />
                 </div>
                 
           </div>
           
       

     </div>
   }
}



export default App;
