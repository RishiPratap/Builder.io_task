import './home.css';
import Lottie from 'react-lottie-player'
import Cat from '../../assets/cat.json';
import {Link} from 'react-router-dom';

function home(){

    return(
        <div className='home'>
            <div className="container">
            <div className="container__left">
            <p className='Big_text'>Cat Infopedia Site using The Cat API</p>
            <p className='small_text'>The following task was to build the web app that fetch set of cats information from given api and perform FILTER, SEARCH and PAGINATION operations using react.js</p>
            <Link to="/start"><button className='button'>Get Started</button></Link>
            </div>
            <div className='container__right'>
            <Lottie
            loop
            animationData={Cat}
            play
            style={{ width: 400, height: 400 }}
            />
            </div>
            </div>
        </div>
    );
}

export default home;