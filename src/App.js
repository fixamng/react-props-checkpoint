import "./App.css";
import Profile from "./profile/Profile";
import profilePhoto from "./profilePhoto.JPG";

function App() {
  const handleName = (user) => {
    alert(`Profile Username: ${user}`);
  };
  return (
    <div className="App">
      <img width={"30%"} height={"30%"} src={profilePhoto} alt="myPhoto"></img>
      <Profile
        fullName="Adeniyi Azeez"
        bio="catch cruise, life's short"
        profession="Hacker"
        handleName={handleName}
      />
    </div>
  );
}

export default App;
