import { Button } from "antd";
import Card from "../UI/Card";
import "./MovieItem.css";

const MovieItem = (props) => {
  // Click handler for modal pop up
  const clickHandler = () => {
    
    // Fetch from API using the movie's ID to fetch more details
    fetch(
      `https://www.omdbapi.com/?i=${props.imdbID}&y=&plot=full&tomatoes=true&r=json&apikey=cb8625d1`
    )
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        props.onShowModal(response);
      });
  };

  return (
    <li>
      <Card className="movie-item">
        <div className="movie-item__description">
          <img
            className="movie-item__poster"
            alt={props.title}
            src={
              props.img === "N/A"
                ? "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                : props.img
            }
          />
          <h2>
            {props.title} ({props.year})
          </h2>
          <Button
            type="primary"
            onClick={clickHandler}
            className="movie-item__price"
          >
            Details
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default MovieItem;
