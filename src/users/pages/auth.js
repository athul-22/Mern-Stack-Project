import React, {useState} from "react";
import Card from "../../shared/components/UIElements/Cards/Card";
import Button from "../../shared/FormElements/Button";
import Input from "../../shared/FormElements/input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hooks";
import './auth.css';


const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true)
    const [ formState, inputHandler , setFormData] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        },
    });

    const switchModeHandler = () =>{
        if(!isLoginMode){
            setFormData({
                name:undefined,
            },formState.inputs.email.isValid && formState.inputs.password.isValid )
        }else{
            setFormData({
                ...formState.inputs,
                name: {
                    value:'',
                    isValid:false
                }
            },false)
        }
        setIsLoginMode(premode => !premode)
    }

    const autSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return(
        <Card className="authentication">
           
            <form onSubmit={autSubmitHandler}>

                {!isLoginMode && <Input 
                 element="input" 
                 id="name" type="name" 
                 label="NAME" 
                 validators={[VALIDATOR_REQUIRE()]}
                 errorText="Please enter a valid Name"
                 onInput={inputHandler}
                 />}

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

                    <Button type="submit" disabled={!formState.isValid}>
                        {isLoginMode ? "LOGIN" : "SIGNUP"}
                        </Button>              
            </form>
            <Button onClick={switchModeHandler}>{isLoginMode ? "SIGNUP":"LOGIN" }</Button>
        </Card>
    )
}

export default Auth;