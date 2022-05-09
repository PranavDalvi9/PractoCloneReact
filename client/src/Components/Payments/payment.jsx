import axios from "axios";
import React, { useState } from "react";
import "./payment.css";

function Payment() {
  React.useEffect(() => {
    getData();
  }, []);

  const [book, setBook] = useState({
    name: "The Fault In Our Stars",
    author: "John Green",
    img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    price: 250,
  });

  const [pay, setPay] = useState([]);

  const getData = () => {
    axios
      .get("https://practocloneapi3.herokuapp.com/products")
      .then(function (res) {
        // console.log(res.data[]);
        setPay(res.data.medicine[0]);
      });
  };

  console.log(pay.price);

  // pay.map((e) => {
  //   console.log(e);
  // });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_xkRX7E1arP0hgl",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:8080/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:8080/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: pay.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="book_container">
        <img src={book.img} alt="book_img" className="book_img" />
        <p className="book_name">{book.name}</p>
        <p className="book_author">By {book.author}</p>
        <p className="book_price">
          Price : <span>&#x20B9; {pay.price}</span>
        </p>
        <button onClick={handlePayment} className="buy_btn">
          buy now
        </button>
      </div>
    </div>
  );
}

export default Payment;
