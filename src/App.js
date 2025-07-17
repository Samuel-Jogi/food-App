import "./styles.css";
/*- Header
    -logo
    -nav-items
  -body
    -search bar
    -resto cards
  -footer
    -links

 *
 */
const Body = () => {
  return (
    <div className="appBody">
      <div>
        <input />
        <button>Search</button>
      </div>
      <div className="card-container">
        <ResCards resName="Samuel Foods" cuisineName="Burger Delicious" />
        <ResCards resName="KFC Foods" cuisineName="French Fries" />
        <ResCards resName="Orange Foods" cuisineName="Drinks Delicious" />
        <ResCards resName="BBC Foods" cuisineName="Mutton Biryani" />
        <ResCards resName="Taj hotel Foods" cuisineName="Desets Delicious" />
        <ResCards resName="Kerala Foods" cuisineName="cocountOil Delicious" />
        <ResCards resName="Andhra Biryani" cuisineName="Spicy foods" />
        <ResCards resName="Hyderabad Biryani" cuisineName="Haleem special" />
        <ResCards resName="Guntur Karam" cuisineName="Red chilli hot" />
        <ResCards resName="Mumbai vadaPav" cuisineName="Street food" />
      </div>
    </div>
  );
};


const ResCards = (props) => {
  return (
    <div className="res-card">
      <img
        className="restCard"
        src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"
      />

      <h3>{props.resName}</h3>
      <h4>{props.cuisineName}</h4>
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

export const HeadingComponent = () => {
  return (
    <div class="app">
      <div className="Header">
        <div>
          <img
            className="logo_container"
            src="https://static.vecteezy.com/system/resources/previews/047/171/152/non_2x/logo-design-for-restaurant-and-food-company-vector.jpg"
          />
        </div>
        <div class="nav_items">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
          </ul>
        </div>
      </div>
      <Body />
    </div>
  );
};
