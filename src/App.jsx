import Form from "./components/Form";
import Card from "./components/Card";
import logo from "./assets/img/logo.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="description">
        <img className="logo" src={logo} alt="logo" />
        <p className="caption">Suite of Bussiness Support Services</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          eligendi. Cum aut voluptatem aliquam doloribus, veniam architecto
          laborum explicabo cupiditate quae nesciunt ducimus quisquam rem
          repudiandae libero dolores facilis distinctio.
        </p>
        <Form />
      </div>
      <div className="card-container">
        <Card
          heading={"Presentation"}
          description={
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          }
        />
        <Card
          heading={"Presentation"}
          description={
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          }
        />
        <Card
          heading={"Presentation"}
          description={
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          }
        />
        <Card
          heading={"Presentation"}
          description={
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          }
        />
        <Card
          heading={"Presentation"}
          description={
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          }
        />
        <Card
          heading={"Presentation"}
          description={
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          }
        />
      </div>
    </div>
  );
}

export default App;
