
function Home(props){
    return(
      <div> 
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <img src={props.image} alt="logo" />
      </div>
    )}
    
  export default Home;  