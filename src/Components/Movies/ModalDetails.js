import "./ModalDetails.css";

const ModalDetails = (props) => {
  return (
    <div className="modal-details">
      <img alt={props.details.Title} src={props.details.Poster} />
      <div className="modal-details__info">
        <h2>{props.details.Title} ({props.details.Year})</h2>
        <p className="modal-details__runtime"><i>{props.details.Runtime}</i></p>
        <div className="modal-details__specific-info__container">
          <p className="modal-details__specific-info"><b>Genre: </b>{props.details.Genre}</p>
          <p className="modal-details__specific-info"><b>Director: </b>{props.details.Director}</p>
          <p className="modal-details__specific-info"><b>Notable Actors/Actresses: </b>{props.details.Actors}</p>
          <p className="modal-details__specific-info"><b>Age Rating: </b>{props.details.Rated}</p>
          <p className="modal-details__specific-info"><b>MetaScore: </b>{props.details.Metascore}</p>
          <p className="modal-details__specific-info"><b>IMDB Rating: </b>{props.details.imdbRating}</p>
          <p className="modal-details__specific-info"><b>Plot Summary: </b>{props.details.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
