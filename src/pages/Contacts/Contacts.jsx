import css from './Contacts.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { selectAuthToken } from 'redux/auth/authSelectors';
import { Spinner } from '@chakra-ui/react';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const { token } = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <div className={css.contactsWrapper}>
      <div className={css.contactsForm}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacstFilter}>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            pos="absolute"
          />
        )}
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
