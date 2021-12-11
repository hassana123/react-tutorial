import "./style.css";

function App() {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h3>card details</h3>
          <img
            src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <p className="p1">card type</p>
        <div className="cardtype">
          <div className="card1">card1</div>
          <div className="card2">card2</div>
          <div className="card3">card3</div>
          <div className="card4">card4</div>
        </div>
        <div className="forms">
          <label>Name on card</label>
          <input type="text" />
          <label>card number</label>
          <input type="number" />
          <label>expiry date</label>
          <input type="date" />
          <label>CVV</label>
          <input type="number" />
        </div>
        <hr />
        <div className="price">
          <div className="subtotal">subtotal</div>
          <div className="shippin">shipping</div>
          <div className="total">total</div>
        </div>
        <a href="">$3 820.00 checkout</a>
      </div>
    </div>
  );
}

export default App;
