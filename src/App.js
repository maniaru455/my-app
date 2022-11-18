import './App.css';

function App() {
  return (
    <div className="App">
      <User
        name="Arjun"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU" />
      <User
        name="Malar"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" />
      <User
        name="Saravanan"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9F290eYA84VTdmPklY5zLD_ZLUiZsKLo0A&usqp=CAU" />


    </div >
  );
}
function User({ pic, name }) {
  return (
    <section>
      <img className="user-profile-pic" src={pic} alt={name} />
      <h1 className="user-name">
        Hello,<span className="user-first-name">{name}</span>>
      </h1>

    </section>

  );
}

export default App;



