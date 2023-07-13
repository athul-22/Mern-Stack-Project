import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../shared/FormElements/input";
import Button from "../../shared/FormElements/Button";

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


const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    if (!identifiedPlace) {
        return (
            <form>
                <Input
                    id="title" 
                    element="input" 
                    type="text" 
                    label="Title" 
                    onInput={()=>{}}
                    value={identifiedPlace.title}
                    valid={true}
                    />

                    <Input
                    id="description" 
                    element="textArea" 
                    label="Description" 
                    onInput={()=>{}}
                    value={identifiedPlace.description}
                    valid={true}
                    />
                    <Button type="submit">SUBMIT</Button>
            </form>
        );
    };

    return <h1>update place</h1>
}



export default UpdatePlace;