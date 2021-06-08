import {Button} from 'antd';
import Card from '../UI/Card';
import './MovieItem.css';

const ExpenseItem = (props) => {

  const clickHandler = () => {
    props.onShowModal(props.key);
  }

  return (
    <li>
      <Card className='expense-item'>
        <div className='expense-item__description'>
            <img className="Poster" alt={props.title} src={props.img} />
            <h2>{props.title} ({props.year})</h2>
            <Button type="primary" onClick={clickHandler} className='expense-item__price'>Details</Button>
          </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;