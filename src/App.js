import Expenses from "./components/Expenses";

function App() {

  const expenses = [ 
    {
      id: 1,
      title: 'Car Insurance',
      amount: 12200,
      date: new Date(2024, 2, 13)
    },
    {
      id: 2,
      title: 'Bike Insurance',
      amount: 8000,
      date: new Date(2024, 3, 13)
    },
    {
      id: 3,
      title: 'Health Insurance',
      amount: 2000,
      date: new Date(2024, 3, 23)
    },
    {
      id: 4,
      title: 'Life Insurance',
      amount: 1200,
      date: new Date(2024, 2, 23)
    },
  ];

  return (
    <div className="App">
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
