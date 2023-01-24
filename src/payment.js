import React, {useRef, useState } from 'react';
import Cleave from 'cleave.js/react';
// import "cleave.js/dist/addons/cleave-phone.ng"

const Payment= () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [time, setTime] = useState('');
  const [phoneNumber , setPhoneNumber] = useState("");
  const inputRef = useRef(null)

  return (
    <div className="form-wrapper">
        <h2>Payment Form</h2>
    <form>
        <div className="input-group">
            <div className="input-box">             
                 <label>
        Credit Card
        <Cleave
        className='card'
          options={{ creditCard: true }}
          value={creditCardNumber}
          onChange={e => setCreditCardNumber(e.target.value)}
        />
      </label>
      </div>
      <div className="input-box">
        
      <label>
        Expiration Date:
        <Cleave
        className='card'
          options={{ date: true, datePattern: ['Y', 'M','D'] }}
          value={expirationDate}
          onChange={e => setExpirationDate(e.target.value)}
        />
      </label>
      </div>
      </div>
      <div className="input-group">
      <div className="input-box">
      <label>
        CVV:
        <Cleave
        className='card'
          options={{ blocks: [3], numericOnly: true }}
          value={cvv}
          onChange={e => setCvv(e.target.value)}
        />
      </label>
      </div>
      </div>


            <div className="input-group">
                <div className="input-box">
                <label>
        Time
        <Cleave
        className='card'
          options={{ time:true, timePattern:["h","m"] }}
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </label>

         </div>
        
        {/* <div className="input-group"> */}
            <div className="input-box">
            <label>
        Phone number
        <Cleave
        className='card'
        ref={inputRef}
          options={{ 
            prefix: "+234",
            numericOnly: true,
            blocks:[ 4,3 ,4 ],
            delimiters: [" -"]
         }}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </label>
    


            </div>
        </div>
      


      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Payment;
