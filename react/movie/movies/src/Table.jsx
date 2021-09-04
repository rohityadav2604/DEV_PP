

import table from "./Table.css";
let Table = (props)=>{

    let allMovies ;
    let filteredMovie
    allMovies = props.moviesData;
    filteredMovie = allMovies;
    if(props.pageNumber<10)
    {  
      let startindex = (props.pageNumber-1)*4;
      let endindex = Math.min(allMovies.length , props.pageNumber*4);
      
       filteredMovie =  allMovies.slice(startindex , endindex);
      

    }
    if(props.pageNumber<10)
    {

      
              let currFilter = props.selectedFilter;
              filteredMovie =  filteredMovie.filter((el)=>{
             if(currFilter == "All Genre")
             {
                 return el;
             }
             else if(el.genre.name == currFilter)
             {  
                return el;
  
             }  
      });
      
      if(props.search.length>0)
      {
          console.log(props.search)
          filteredMovie = allMovies.filter((el)=>{
             let movietitle = el.title;
             movietitle = movietitle.toLowerCase();
             let search = props.search.toLowerCase();
             return movietitle.includes(search);
          })
      }

    }
    
    // console.log(props.pageNumber);
    
    

    return (
        <>
        <div class="row">
          <div class="col-10">
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                  {

                         
                         filteredMovie.map((el)=>{
                                return <tr  key={el._id}>
                                       <td>{el.title}</td>
                                       <td>{el.genre.name}</td>
                                       <td>{el.numberInStock}</td>
                                       <td>{el.dailyRentalRate}</td>
                                       <td
                                       onClick = {()=>{
                                         
                                         props.toggleLike(el._id);
                                         
                                       }}
                                       >
                                        {
                                          el.liked ? (<span class="material-icons-outlined">
                                          favorite
                                         </span>)
                                         :(<span class="material-icons-outlined">
                                         favorite_border
                                         </span>) 
                                        } 
                                       
                                       </td>
                                      <td 
                                      onClick= {()=>{
                                        props.deleteMovie(el._id);
                                      }}
                                      ><button class="Table-delete-btn">Delete</button></td>
                                      </tr>   
                         })
                  }
                     
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
}
export default Table;