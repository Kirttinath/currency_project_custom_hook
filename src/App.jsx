import "./App.css";
import InputBox from "./Components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/259251/pexels-photo-259251.jpeg?auto=compress&cs=tinysrgb&w=600)`,
      }}
    >
      <InputBox />
    </div>
  );
}

export default App;
