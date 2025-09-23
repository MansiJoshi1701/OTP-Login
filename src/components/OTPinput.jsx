import React, { useEffect, useRef, useState } from 'react'

function OTPinput( {length , onOTPsubmit} ) {

    const [otp , setOTP] = useState(new Array(length).fill(""));
    const inputRefs = useRef([])


    //To focus on the 1st input field
    useEffect(() => {
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    } , [])

    const handleChange = (index , e) => {

        const num = e.target.value;

        //1. Check if typed value is not a number
        if(isNaN(num)) return; 

        //2. Update the otp a/c the recent value typed
        const newOtp = [...otp]; //otp & newOtp are both arrays. So otp = newOtp = ["1" , "5" , " 2" , "3"]
        newOtp[index] = num.substring(num.length-1); //we only want to take the most recent typed value
        setOTP(newOtp);

        //3. Convert the newOtp[] to a simple string variable before submitting it
        const finalOTP = newOtp.join(""); //finalOTP = "1523"
        if(finalOTP.length == length) onOTPsubmit(finalOTP);

        //4. Improve user experience - control should move to next input box immediately
        if(num && index < length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }

    };

    const handleClick = () => {};

    //To improve user experience - on pressing baclspace control should go to previous cell
    const handleKeyDown = () => {};

  return (
    <div>

        {
            otp.map((val,index) => {
                return(
                    <input
                        key={index}
                        ref={(input) => (inputRefs.current[index] = input)}
                        type="text"
                        value={val}
                        onChange={(e) => handleChange(index,e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(index,e)}
                        className='otpInput'
                    />
                )
            })
        }

    </div>
  )
}

export default OTPinput