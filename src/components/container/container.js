import './container.css';
import { useState, useEffect } from "react";
import Cards from '../cards/cards';
import Placeholder1 from '../placeholder/placeholder';
import Form from 'react-bootstrap/Form';

const request_headers = new Headers();
    const api_key = process.env.REACT_APP_API_KEY;
    request_headers.append("Authorization", `Bearer ${api_key}`);
    request_headers.append("Content-Type", "application/json");

const request_options = {
      method: "GET",
      headers: request_headers,
    };


function Hero() {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [paginate, setpaginate] = useState(3);

      useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=pers`, request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);
  const data = Object.values(items);

  const FilterValue =  (e) =>  {
        console.log(e);
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${e}`, request_options)
          .then((res) => res.json())
          .then(
            (result) => {
              setLoaded(true);
              setItems(result);
            },
            (error) => {
              setLoaded(true);
              setError(error);
            }
          );
      }
  const search_parameters = Object.keys(Object.assign({}, ...data));
  function search(item) {
    console.log(query)
    return item.filter(
      (item) =>
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query)
        )
    );
  }

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 1);

    console.log(paginate);
  };

  const load_less = (event) => {
    setpaginate((prevValue) => prevValue - 1);

    console.log(paginate);
  };
 
  console.log(items)
  if (error) {
    return <>
    {error.message}
    </>;
  }
  else if (!loaded) {
    return (
    <div className='hero'>
    <div className='cards'>
    <Placeholder1 />
    <Placeholder1 />
    <Placeholder1 />
    </div>
    </div>
    );
  }
    else {
    return (
        <div className='hero'>
        <div className='filters'>
          <div className='search'>
          <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Serach Cat Id</Form.Label>
        <Form.Control type="search" placeholder="search" onChange={(e) => setQuery(e.target.value)} />
      </Form.Group>
          </div>
          <div className='sort'>
          <Form.Label>Sort Cat</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e)=> FilterValue(e.target.value)}>
          <option value="">Select Options</option>
          <option value="sibe">Siberian</option>
          <option value="aege">Aegean</option>
          <option value="beng">Bengal</option>
          </Form.Select>
          </div>
        </div>
        <div className='cards'>
        {/* {data.map((item,i) => (
            <Cards card_img={item.url} key={i} cat_id={item.id} />
          ))} */}
          {search(data).slice(0,paginate).map((item,i) => (
          <Cards card_img={item.url} key={i} cat_id={item.id} val={i} />
        ))}
        </div>
        <div className='load_more'>
        <button onClick={load_less}>Previous</button>
        <button onClick={load_more}>Next</button>
        </div>
        </div>
    );
    }
}

export default Hero;