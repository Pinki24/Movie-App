import {Component}  from "react";
class MovieCard extends Component{
    constructor(){
        super();//becase of we are extending a class, if we are inheriting something in our current class,then we must first make use of super constructor
        this.state={
            title:"The Avengers",
            plot:"Supernatural powers shown in the movie.",
            price:199,
            rating:8.9,
            stars:0
        }
        //second way of binding(inside the constructor)
    // this.addStars=this.addStars.bind(this);
    }
    // one way of binding
    // addStars(){
    //     console.log("this is:",this);
    // }
    
    // third is use arrow function because it automatically binds to cure=rent instance 
      addStars=()=>{
        if(this.state.stars>=5){
            return;
        }
        // form1
        // this.setState({
        //     stars:this.state.stars+0.5
        // });
        // form2 its a callback function

        this.setState((prevs)=>{
            return{
                stars:prevs.stars+0.5
            }
        });
        // this.state.stars+=0.5;
        // console.log("this.state.stars:",this.state.states);
    } 
    decStars=()=>{
        if(this.state.stars<=0){
            return;
        }
        // form1
        // this.setState({
        //     stars:this.state.stars+0.5
        // });
        // form2 its a callback function

        this.setState((prevs)=>{
            return{
                stars:prevs.stars-0.5
            }
        });
        // this.state.stars+=0.5;
        // console.log("this.state.stars:",this.state.states);
    } 
    render(){
            // here also we can destructing
            const {title,plot,price,stars}=this.state;
            return(
                <div className="main">
                    <div className="movie-card">
                        <div className="left">
                            <img alt="Poster" src="https://image.tmdb.org/t/p/original/pdhOE0NAZaPzjsgTvatRP1xFhG3.jpg"/>
                        </div>
                        <div className="right">
                            {/* <div className="title">The Avengers</div>
                            <div className="plot">Supernatural powers shown in the movie.</div>
                            <div className="price">Rs. 199</div> */}
                            <div className="title">{title}</div>
                            <div className="plot">{plot}</div>
                            <div className="price">{price}</div>
                            <div className="footer">
                            { /* <div className="rating">8.9</div> */}
                            <div className="rating">{this.state.rating}</div>

                                <div className="star-dis">
                                        <img className="str-btn" alt="decrease" 
                                        src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" 
                                        onClick={this.decStars.bind(this)}
                                        />
                                        
                                        <img alt="star" 
                                        src="https://cdn-icons-png.flaticon.com/128/616/616489.png"
                                        className="stars" />
                                        <img className="str-btn" alt="increase" 
                                        src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                        onClick={this.addStars.bind(this)} />
                                    {/* <span>0 </span> */}
                                    <span>{stars} </span>
                                    
                                
                                </div>
                                <button className="favourite-btn">Favourite</button>
                                <button className="cart-btn">Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        }
export default MovieCard;