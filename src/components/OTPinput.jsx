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
        if(isNaN(num)) return; //if typed value is not a number

        const newOtp = [...otp]; //otp & newOtp are both arrays. So otp = newOtp = ["1" , "5" , " 2" , "3"]
        newOtp[index] = num.substring(num.length-1); //we only want to take the most recent typed value
        setOTP(newOtp);

        //we need to convert the newOtp[] to a simple string variable before submitting it
        const finalOTP = newOtp.join(""); //finalOTP = "1523"
        if(finalOTP.length == length) onOTPsubmit(finalOTP);

    };

    const handleClick = () => {};
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