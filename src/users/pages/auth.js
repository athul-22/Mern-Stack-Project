import React from "react";
import Card from "../../shared/components/UIElements/Cards/Card";
import Button from "../../shared/FormElements/Button";
import Input from "../../shared/FormElements/input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hooks";
import './auth.css';


const Auth = () => {

    
    const [ formState, inputHandler ] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        },
    });

    const autSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return(
        <Card className="authentication">
           
            <form onSubmit={autSubmitHandler}>
                <Input 
                    element="input" 
                    id="email" type="email" 
                    label="E-MAIL" 
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Email"
                    onInput={inputHandler}
                    />
                   
                 <Input 
                    element="input" 
                    id="password" 
                    type="password" 
                    label="PASSWORD" 
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Password"
                    onInput={inputHandler}
                    />     

                    <Button type="submit" disabled={!formState.isValid}>SUBMIT</Button>              
            </form>
        </Card>
    )
}

export default Auth;