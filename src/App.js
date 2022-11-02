import img from './images/img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <img src={img}  className="img" alt="logo" />
        <p>
          Raheem Ibrahim Ademola
        </p><br />
        <div className="profile">
          <p>twitter: @ademoraheem</p>
        </div>
        <div className="profile">
          <p>slack: finesser</p>
        </div>
      <div className="links">
        {/* <p>
          <a
            className="App-link"
            href="https://training.zuri.team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zuri Books
          </a>
        </p> */}
        <div className="link-div">
          <a
            className="link"
            href="https://books.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zuri Books
          </a>

        </div>
        <div className="link-div">
          <a
            className="link"
            href="https://books.zuri.team/python-for-beginners"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Books
          </a>

        </div>
        <div className="link-div">
          <a
            className="link"
            href="https://background.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Background check on coders
          </a>
          
        </div>
        <div className="link-div">
          <a
            className="link"
            href="https://books.zuri.team./design-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
          Design Books
          </a>
          
        </div> 
      </div>
    </div>
  );
}

export default App;
