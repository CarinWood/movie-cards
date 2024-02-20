import AddMovie from "../components/AddMovie";
import '../styles/home.css'

const Home = () => {
  return (
    <>
        <div className="top-page">
            <p className="headline">Movie Rating</p>
            <AddMovie />
        </div>
    </>
  );
};

export default Home;
