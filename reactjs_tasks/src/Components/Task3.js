import ColorPicker from "./Components/ColorPicker";
const App = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "magenta",
    "cyan",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
  ];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
