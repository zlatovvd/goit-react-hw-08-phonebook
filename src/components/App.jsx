import {Routes, Route} from 'react-router-dom';
import Contacts from 'pages/Contacts';

const App = () => {
  

  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: '40px',
        fontSize: 40,
        color: '#010101',
      }}     
    >
      <Routes>
        <Route path = '/contacts' element = {<Contacts/>} />
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ThreeDots
        height="50"
        width="50"
        radius="8"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ position: 'absolute', left: '120px' }}
        wrapperClassName=""
        visible={isLoading && !error}
      />
      <ContactList /> */}
    </div>
  );
};

export default App;
