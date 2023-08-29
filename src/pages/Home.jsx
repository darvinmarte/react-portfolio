import plane from '../assets/images/plane.png'; // Tell webpack this JS file uses this image

export default function Home() {
    return (
      <div>
        <h1>Home</h1>
        <img src={plane} alt="plane" />
        <p>
        
        </p>
      </div>
    );
  }