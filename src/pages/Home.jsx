import plane from '../assets/images/plane.png'; // Tell webpack this JS file uses this image


export default function Home() {
    return (
      <div>
        <h1>Darvin Marte</h1>
        <br></br>
        <h2>Full Stack Developer</h2>

        <img className = "plane" src={plane} style={{height:250, width:250}} alt="plane" />
        <p>
        
        </p>
      </div>
    );
  }