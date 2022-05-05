import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} style={{ height: "15rem" }} />
        <Card.Body>
          <Card.Title> {props.title}</Card.Title>
          <Card.Text>
            <div className="info" style={{ display: "flex" }}>
              <p>Genre:</p>
              <p>{props.genre}...</p>
            </div>
            <div className="info" style={{ display: "flex" }}>
              <p>Director:</p>
              <p>{props.dir}</p>
            </div>
            <div className="info" style={{ display: "flex" }}>
              <p>Staring:</p>
              <p>{props.star}...</p>
            </div>
            <div className="info" style={{ display: "flex" }}>
              <p>Language:</p>
              <p>{props.language}..</p>
            </div>
            <div className="info" style={{ display: "flex" }}>
              <p>Voted by {props.vote} people</p>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Watch Trailer</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MovieCard;
