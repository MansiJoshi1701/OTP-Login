import {useState} from 'react'
import OTPinput from './OTPinput';

const PhoneLogin = () => {
    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOTPinput , setShowOTPinput] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number!");
        }

        else{
            //Call Backend API to send the OTP to the given phoneNumber

            //Display the OTP entering window
            setShowOTPinput(true);
        }

    }

    const onOTPsubmit = () => {

        console.log("Login successfull");
    }

    return (
        <div>
            {!showOTPinput ? <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter Phone Number'
                />
                <button type='Submit'>Submit</button>
            </form> : <div>
                    <p>OTP sent to phone number : {phoneNumber}</p>
                    <OTPinput length={4} onOTPsubmit={onOTPsubmit}/>
                </div>}

        </div>
    )
}

export default PhoneLogin;