import React,{Component} from 'react';
import './watched.css';

class Watched extends Component{
    constructor(props){
        super(props);
     }

   displayPic=element=>{
    element.target.style.display='none';
   }
   render(){
       const newerVal = this.props;
       var arr = newerVal.movies.filter((item, pos) => {
           return newerVal.movies.indexOf(item) == pos;
       })
       
    return(
        
      <div className ="container ">
         <h1>Watched</h1>
          {
              arr.map((pic,key)=>{
                  return(
                      <div className="column">
                 <div className="row" style={{width:"20%"}}>     
                <img src={pic} key={key} onClick={this.displayPic}/>
                  </div>
                  </div>
                  )
              }
            )
          }
      </div>
      
    )
} 
}
export default Watched;