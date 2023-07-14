import React, {useEffect ,useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../shared/FormElements/input";
import Button from "../../shared/FormElements/Button";
import './placeForm.css';
import { useForm } from "../../shared/hooks/form-hooks";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";

const UpdatePlace = () => {

    const [isLoading , setIsloADING ] = useState(true)

    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
            address: "test adddress",
            location: {
                lat: 3003333,
                lng: 72.333,
            },
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
            address: "test adddress",
            location: {
                lat: 3003333,
                lng: 72.333,
            },
        },
        {
            id: 'p3',
            title: 'pink tree',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg',
            address: "test adddress",
            location: {
                lat: 3003333,
                lng: 72.333,
            },
        },
    ]
    
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState , inputHandler , setFormData] = useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        }
    },true)

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    useEffect(()=>{
        setFormData({
            title: {
                value:identifiedPlace.title,
                isValid:true
            },
            description: {
                value:identifiedPlace.description,
                isValid:true
            }
        })
        setIsloADING(false)
    },[setFormData.identifiedPlace])

    
    if(isLoading){
        return <h3>Loading</h3>
    }

    // if(identifiedPlace){
        return (
            
            <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
                <Input
                    id="title" 
                    element="input" 
                    type="text" 
                    label="Title" 
                    onInput={inputHandler}
                    initialValue={formState.inputs.title.value}
                    initialValid={formState.inputs.title.isValid}
                    validators={[VALIDATOR_REQUIRE()]}
                    />

                    <Input
                    id="description" 
                    element="textArea" 
                    label="Description" 
                    onInput={inputHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                    initialValue={formState.inputs.description.value}
                    initialValid={formState.inputs.description.isValid}
                    />
                    <Button type="submit">SUBMIT</Button>
            </form>
        );
    // };

    // return <h1>update place</h1>
}

export default UpdatePlace;
