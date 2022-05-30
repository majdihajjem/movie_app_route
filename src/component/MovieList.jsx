import React from 'react'
import '../App.css';
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
function MovieList({movies}) {
    return (
        <div className="mcard">
            {movies.map((el,i)=><Card style={{ width: '18rem' }} key={uuidv4()} >
            <Card.Img className="movieimg" variant="top" src={el.imgurl} />
            <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.discription}</Card.Text>
            <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={parseInt( el.rating)} />
            </Card.Body>
            <Link to={`/description/${el.id}`}>see more</Link>
            </Card>)}
        </div>
    )
}

export default MovieList