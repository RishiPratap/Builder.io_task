import './navbar.css';
import { Link } from 'react-router-dom';

function heading() {
  return (
    <div className="navbar">
        <div className='logo'>
        <Link to="/"><img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe6a94bfbccd24ec8b4db085cd475b7eb?width=171" height="100px" width="100px" alt="Logo"/></Link>
        </div>
        <div className='links'>
        <Link to="/start"><button className='start'>Get Started</button></Link>
        </div>
        </div>
  );
}

export default heading;