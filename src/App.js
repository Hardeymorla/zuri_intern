import img from './img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <b>PROFILE</b>
      <div className="profile">
        <img src={img} width="150px" className="img" alt="logo" />
        <p>
          id: profile_img
        </p>
        <div className="twitter">
          <p>@ademoraheem</p>
          <p>id: twitter</p>
        </div>
        <div className="slack">
          <p>finesser</p>
          <p>id: slack</p>
        </div>
      </div><br />
      <b>LINKS</b>
      <div className="link">
        <p>
          <a
            className="App-link"
            href="https://training.zuri.team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Links
          </a>
          <article>Zuri Team</article>
        </p>
        <p>
          <a
            className="App-link"
            href="https://books.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          <article>Zuri Books </article>
        </p>
        <p>
          <a
            className="App-link"
            href="https://books.zuri.team/python-for-beginners"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          <article>Python Books</article>
        </p>
        <p>
          <a
            className="App-link"
            href="https://background.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          <article>Background check on coders</article>
        </p>
        <p>
          <a
            className="App-link"
            href="https://books.zuri.team./design-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
          Link  
          </a>
          <article>Design Books</article>
        </p> 
      </div>
    </div>
  );
}

export default App;
