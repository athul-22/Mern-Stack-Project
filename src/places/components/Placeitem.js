import React, {useState} from 'react'
import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Cards/Card';
import Button from '../../shared/FormElements/Button';
import Model from '../../shared/components/UIElements/Model';

const Placeitem = props => {

  const [showMap , setShowMap ] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Model show={showMap} onCancel={closeMapHandler} header={props.address} contentClass="place-item__model-content" footerClass="place-item__model-actions" footer={<Button onClick={closeMapHandler}>CLOSE</Button>}/>
    <li className='place-item'>
        <Card className="place-item__content">
        <div className='place-item__image'>
            <img src={props.image} alt='title'/>
        </div>
        <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className='place-item__actions'>
            <Button inverse>View on Map</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
        </div>
        </Card>
    </li>
    </React.Fragment>
  )
}

export default Placeitem