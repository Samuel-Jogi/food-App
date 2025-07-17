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
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
      </div>
    </div>
  );
};

const ResCards = () => {
  return (
    <div className="res-card">
      <img
        className="restCard"
        src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"
      />
      <h3>Samuel Foods</h3>
      <h4>Biryani North Indian</h4>
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
