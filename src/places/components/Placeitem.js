import React, {useState} from 'react'
import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Cards/Card';
import Button from '../../shared/FormElements/Button';
import Model from '../../shared/components/UIElements/Model';

const Placeitem = props => {

  const [showMap , setShowMap ] = useState(false);
  const [showConfirmModal , setShowConfirmModal ] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const setShowDeleteHandler = () => {
      setShowConfirmModal(true);
    }

    const cancelDeleteHandler = () => {
      setShowConfirmModal(false);
    }

    const confirmDeleteHandler = () => {
      console.log("SUCCESSFULLY DELETED");
    }

  return (
    <React.Fragment>
      {/*✅ MODEL 1 */}
      <Model 
      show={showMap} 
      header={props.address} 
      footerClass="place-item__model-actions" 
      footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      />

      {/*✅ MODEL 2 */}
      <Model
      show={showConfirmModal}
      onCancel={cancelDeleteHandler}
      header="DELETE" footerClass="place-item__modal-actions" footer={
        <React.Fragment>
          <Button onClick={cancelDeleteHandler} inverse>CANCEL</Button>
          <Button onClick={confirmDeleteHandler} danger>DELETE</Button>
        </React.Fragment>
      }>
     <p>Delete cant be undo</p>

      </Model>
    
    
      <div className='map-container'>
        <h2>THE MAP</h2>
      </div>
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
            <Button inverse onClick={openMapHandler}>View on Map</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button onClick={setShowDeleteHandler} danger>Delete</Button>
        </div>
        </Card>
    </li>
    </React.Fragment>
  )
}

export default Placeitem