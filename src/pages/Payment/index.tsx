import "./style.scss";
export default function index() {
  return (
    <div className="payment">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="title">Payment</div>
        <div className="img-container d-flex justify-content-center">
          <img
            className="img-fluid"
            src="https://img.icons8.com/color/48/000000/visa.png"
          />
        </div>
        <div className="input-container ic2">
          <input id="name" className="input" type="text" placeholder="" />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder="" />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Card number
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="date" placeholder="" />
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="number"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Cvv
          </label>
        </div>

        <button className="btn submit">submit</button>
      </form>
    </div>
  );
}
