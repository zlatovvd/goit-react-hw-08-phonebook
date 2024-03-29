import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsThunk';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = contactsId => {
    dispatch(deleteContact(contactsId));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <IconButton
            variant="outline"
            colorScheme="red"
            onClick={() => handleDelete(id)}
            size="xs"
            icon={<DeleteIcon />}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
