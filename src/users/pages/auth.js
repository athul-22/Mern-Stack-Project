import React from "react";
import './auth.css';
import Card from "../../shared/components/UIElements/Cards/Card";
import Button from "../../shared/FormElements/Button";
import Input from "../../shared/FormElements/input";


const Auth = () => {
    return(
        <Card className="authentication">
            <hr/>
            <form>
                <Input element="input" id="email" type="email" label="E-MAIL" />
                
            </form>
        </Card>
    )
}

export default Auth;