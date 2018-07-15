import React,{Component} from 'react';
import Loader from '../../Loader/index';
import './contentContainer.css';
import Watched from './watched';
class Content extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
            buttonWatched:[],
            
        }
        this.pictureClicked = this.pictureClicked.bind(this);
    } 
     pictureClicked(element) {
        this.setState({
            movies: this.state.movies.concat(element.target.src),
            buttonWatched: this.state.buttonWatched.concat(Object.values(this.props.details)[0])
        })
        }
       
    
    render(){
    const {movies,buttonWatched} =this.state;
   
    const newVal =this.props; 
    var result='';
     var i;
     for (i in Object.values(newVal.details)[14]){
         if(i == 1)
         result= Object.values(newVal.details)[14][i].Value;
         else
         Object.values(newVal.details)[14][i].Value;
     }
	return (
   
      <div className = "outer-boundary ">
                   {
                       newVal.isFetching && <Loader />
                   }
                    
                   {
                       !newVal.isFetching && newVal.name.trim() === '' && <p style ={{textAlign:'center',marginTop:0,color:'white',paddingTop:20,fontSize:20}}>Enter Movie Name </p>
                   }
                   {
                       !newVal.isFetching && newVal.name.trim() !== '' && Object.keys(newVal.details)[0] !== 'Title' && <p style ={{textAlign:'center',marginTop:0,color:'white',paddingTop:20,fontSize:20}}> Movie Not Found</p>
                   }
                   
        
       <div className="info">            
        {!newVal.isFetching && Object.keys(newVal.details)[0] === 'Title' && 
         <div className ="clearfix image-info">
                 {
                    !newVal.isFetching && <div class="image-section box"><img  src={Object.values(newVal.details)[13]} alt="movie poster" onClick ={this.pictureClicked}/></div>
                 }
        <div className="box upper-info">
          <h1>{Object.values(newVal.details)[0]}</h1>
          <p>{Object.values(newVal.details)[3]}</p>
              <div className="rating-section clearfix">
              <div className="row rotten-rating">
               {result === '' && <p className="not-avail">Not Available</p>}
               {result !=='' && result}
              <p>Rotten Tomatoes</p>
              </div>
              <div className="row imdb-rating">
              {Object.values(newVal.details)[16]}
               <p>IMDB Rating</p>
              </div>
              </div>
              {
                  buttonWatched.map((item,key) => {
                  if(!newVal.isFetching && newVal.name.trim() !== '' && Object.values(newVal.details)[0] === item ) 
                  return <div className="watched-button"> <span key={key}>Watched</span></div>;
              })
              } 
          
          </div>
          </div>
        }
        {
          !newVal.isFetching && Object.keys(newVal.details)[0] === 'Title' &&
        <div className ="discription">
            <h3 style={{textAlign:'center'}}>Description</h3>
            <p style={{textAlign:'center'}}>{Object.values(newVal.details)[9]}</p>
          </div>
        }  
      </div> 
      <Watched movies={movies} item={buttonWatched}/>
    </div>
		)
}
}
export default Content;

 