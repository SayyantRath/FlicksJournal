import {Button} from 'antd';
import Card from '../UI/Card';
import './MovieItem.css';

const ExpenseItem = (props) => {

  const clickHandler = () => {

    fetch(`http://www.omdbapi.com/?i=${props.imdbID}&y=&plot=full&tomatoes=true&r=json&apikey=cb8625d1`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        props.onShowModal(response);
      })
  }

  return (
    <li>
      <Card className='expense-item'>
        <div className='expense-item__description'>
            <img className='expense-item__poster' alt={props.title} src={props.img} />
            <h2>{props.title} ({props.year})</h2>
            <Button type="primary" onClick={clickHandler} className='expense-item__price'>Details</Button>
          </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;