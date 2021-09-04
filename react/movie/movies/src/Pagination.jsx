let Pagination = (props)=>{
    return (
        <>
         <nav>
          <ul class="pagination mt-4">
            
            <li 
             onClick ={()=>{
                
                props.getPage(1);
             }}
             class="page-item"><a class="page-link" href="#">1</a></li>
            <li 
             onClick ={()=>{
              props.getPage(2);
           }}
            class="page-item"><a class="page-link" href="#">2</a></li>
            <li
             onClick ={()=>{
              props.getPage(3);
           }}
             class="page-item"><a class="page-link" href="#">3</a></li>
            
            
          </ul>
        </nav>
        </>

    );
}
export default Pagination;