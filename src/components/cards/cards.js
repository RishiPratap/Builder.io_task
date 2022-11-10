import './cards.css';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, link } from "react-router-dom";


function Cards(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [wiki, setWiki] = useState("");
    const HandleShow = () => {
        setShow(true)
            const request_headers = new Headers();
            const api_key = "live_so61Gu6jLwPd3ctfhdIQYVpf6bvPigXf5ZxLYjogAdvA5WhKfV2ALrXD0ko6Z62Z";
            request_headers.append("Authorization", `Bearer ${api_key}`);
            request_headers.append("Content-Type", "application/json");
        
            const request_options = {
              method: "GET",
              headers: request_headers,
            };
            fetch(`https://api.thecatapi.com/v1/images/${props.cat_id}`, request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
          console.log(result);
          console.log(result.breeds[0].name);
          setName(result.breeds[0].name);
          setDesc(result.breeds[0].description);
          setWiki(result.breeds[0].wikipedia_url);
          console.log(wiki)
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
    };
    function gotonext(){
        window.open(wiki);
    }
    return(
        <div className='cards'>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="250px" width="100px" src={props.card_img} />
            <Card.Body>
            <Card.Title>Cat Id: {props.cat_id}</Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={HandleShow}>More Info</Button>
            </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cat Id: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{desc}</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=> gotonext()}>
           Wiki
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Cards;
