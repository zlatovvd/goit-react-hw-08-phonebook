import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import css from './ContactForm.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsThunk';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    let isSubmit = false;
    if (
      !contacts.some(value =>
        value.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      const contact = {
        name,
        number,
      };
      dispatch(addContact(contact));
      isSubmit = true;
    } else {
      toast({
        title: `${name} is already in contacts.`,
        position: 'top',
        isClosable: true,
        status: 'warning',
      });
    }
    return isSubmit;
  };

  const handleChange = event => {
    const { name: inputName, value } = event.currentTarget;

    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (onSubmit({ name, number })) {
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.phoneForm} onSubmit={handleSubmit}>
      <FormControl mb={5} isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormControl>

      <FormControl mb={5} isRequired>
        <FormLabel>Phone number</FormLabel>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </FormControl>

      <Button colorScheme="blue" type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
