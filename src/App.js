import "./styles.css";
const Title = () => <h2>Events are there</h2>;
const Header = () => {
  return (
    <div>
      <p>its working</p>
    </div>
  );
};
export const HeadingComponent = () => {
  return (
    <div>
      <h1> Hello guys</h1>
      <Title />
      <Header />
      {Header()}
      <Header></Header>
    </div>
  );
};
