import React, { useState ,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./Home.css";
import { Modal, Form, Spinner } from "react-bootstrap";
import MovieCard from "../../Components/Card/MovieCard";

const Home = () => {
 useEffect(() => {
    fetchData();
  }, []);
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [category, setCategory] = useState("movies");
  const [language, setLanguage] = useState("hindi");
  const [genre, setGenere] = useState("all");
  const [sort, setSorting] = useState("voting");

  const [show, setShow] = React.useState(false);

  const fetchData = async () => {
    const bodyContent = {
      category: category,
      language: language,
      genre: genre,
      sort: sort,
    };

    const api = await axios.create({
      baseURL: "https://hoblist.com/api/movieList",
    });
    api
      .post("/", bodyContent)
      .then((res) => {
        console.log(res.data.result);
        setdata(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  };

  const handleClose = () => {
    setShow(false);
    fetchData();
  };
  const handleShow = () => setShow(true);

  return (
    <div className="home">
      <Navbar />

      <Button variant="primary" onClick={handleShow}>
        Search Movies
      </Button>

      {/* 
  //Launch  modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g movies"
                autoFocus
                onChange={(event) => setCategory(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g hindi"
                autoFocus
                onChange={(event) => setLanguage(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g all"
                autoFocus
                onChange={(event) => setGenere(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sort</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g voting"
                autoFocus
                onChange={(event) => setSorting(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="movies">
          {data.map((value) => {
            return (
              <MovieCard
                img={value.poster}
                title={value.title}
                genre={value.genre.slice(0, 6)}
                dir={value.director[0]}
                star={value.stars[0].slice(0, 16)}
                language={value.language.slice(0, 20)}
                vote={value.totalVoted}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
