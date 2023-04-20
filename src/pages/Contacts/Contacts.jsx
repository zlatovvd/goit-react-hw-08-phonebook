import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { selectAuthToken } from 'redux/auth/authSelectors';

const Contacts = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if(token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <>
      <h1>Phonebook</h1>
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
      <ContactList />
    </>
  );
};

export default Contacts;
