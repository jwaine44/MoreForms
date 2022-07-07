import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [matchPasswordError, setMatchPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("This must be at least 2 characters!");
        } else {
            setFirstNameError('')
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("This must be at least 2 characters!");
        } else {
            setLastNameError('')
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("This must be at least 5 characters!")
        } else {
            setEmailError('')
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("This must be at least 8 characters!")
        } else {
            setPasswordError('')
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8){
            setConfirmPasswordError("This must be at least 8 characters!")
        } else {
            setConfirmPasswordError('')
        }
        if(e.target.value !== password){
            setMatchPasswordError("Passwords must match!")
        } else {
            setMatchPasswordError('')
        }
    }



    return (
        <form onSubmit= {createUser}>
            <div class="test">
                <label>First Name:</label>
                <input type="text" onChange = { handleFirstName }/>
                {
                    firstNameError ?
                    <p>{firstNameError}</p> :
                    ''
                }
            </div>
            <div class="test">
                <label>Last Name:</label>
                <input type="text" onChange = { handleLastName }/>
                {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ''
                }
            </div>
            <div class="test">
                <label>Email Address:</label>
                <input type="text" onChange = { handleEmail}/>
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ''
                }
            </div>
            <div class="test">
                <label>Password:</label>
                <input type="password" onChange = { handlePassword }/>
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ''
                }
            </div>
            <div class="test">
                <label>Confirm Password:</label>
                <input type="password" onChange = { handleConfirmPassword }/>
                {
                    confirmPasswordError ?
                    <p>{confirmPasswordError}</p> :
                    ''
                }
                {
                    matchPasswordError ?
                    <p>{matchPasswordError}</p> :
                    ''
                }
            </div>
            <div>
            <p>Your Form Data</p>
                <table>
                    <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                    </tr>
                    <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td>{email}</td>
                    </tr>
                    <tr>
                    <td>Password</td>
                    <td>{password}</td>
                    </tr>
                    <tr>
                    <td>Confirm Password</td>
                    <td>{confirmPassword}</td>
                    </tr>
                </table>
            </div>
        </form>
    )
}

export default Form;