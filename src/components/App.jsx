// import { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';

function App() {
  return (
    <div className="App">
      <PhoneBook />
    </div>
  );
}

export default App;
// class App extends Component {
//   state = {
//     contacts: [
//       { name: 'Ruslan', id: 'id-1' },
//       { name: 'ivan', id: 'id-2' },
//       { name: 'zahar', id: 'id-3' },
//     ],
//   };
//   render() {
//     const { contacts } = this.state;
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Phonebook />
//       </div>
//     );
//   }
// }
