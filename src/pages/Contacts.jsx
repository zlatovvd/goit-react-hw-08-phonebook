import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { ThreeDots } from "react-loader-spinner";
import { useSelector, useDispatch  } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
