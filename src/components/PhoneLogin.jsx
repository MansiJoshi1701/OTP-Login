import {useState} from 'react'

const PhoneLogin = () => {
    
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number!");
        }

        else{
            //Call Backend API to send the OTP to the given phoneNumber
            //Display the OTP entering window
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter Phone Number'
                />
                <button type='Submit'>Submit</button>
            </form>

        </div>
    )
}

export default PhoneLogin;