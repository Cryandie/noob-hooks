import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import NewMovieForm from './NewMovieForm';


export const MovieCard = ({nameSearch}) => {
  const [movie, setMovie] = useState([
    {
      title: "Harry Potter",
      description:
        "With their warning about Lord Voldemort's return scoffed at, Harry  and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts. ",
      posterUrl:
        "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/potterebellposter.jpg",
      rate: "8",
      i : 1,
    },
    {
      title: "The Lord Of The Rings",
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. ",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg",
      rate: "9 ",
      i : 2 ,
    },
    {
      title: "Star Wars",
      description:
        "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end. ",
      posterUrl:
        "https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg",
      rate: "6 ",
      i : 3 ,
    },
  ]);

    const addMovie = (title,description,rate,posterUrl) => {
      setMovie ([...movie, {title, description ,rate ,posterUrl }]);
    }
  
  
    return (
      <div>  
        <h1 className="moviesHeader">Movies:</h1>
        <div className="cardsContainer">
        {movie.filter((mv)=> mv.title.toLowerCase().includes(nameSearch.toLowerCase())) 
      .map(( mov , i) => (
            <Card style={{ width: '25rem' , marginBottom :'2rem' }} key={i}>
                
  <Card.Img className="cardImage"style={{height :'29rem'}} variant="top" src={mov.posterUrl} />
  <Card.Body>
    <Card.Title className="title"><strong>{mov.title}</strong></Card.Title>
    <Card.Text>
     {mov.description}
    
    </Card.Text>

    <h4 className="rate">{mov.rate}/10</h4>
  </Card.Body>
</Card>
))}
        </div>
       <NewMovieForm addMovie={addMovie}/>
        </div>
    )
}
