import { SearchIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { filterContactsAction } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterContactsAction(value));
  };

  return (
    <FormControl w={400} mb={5}>
      <FormLabel>Find contacts by name</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          type="text"
          id="filter"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </InputGroup>
    </FormControl>
  );
};

export default Filter;
