import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import * as selectors from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectors.getItems);
  const filterValue = useSelector(selectors.getFilterValue);

  const showFilteredContacts = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = showFilteredContacts();

  const stringToColor = string => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const splitName = nameToSplit => {
    const array = nameToSplit.split(' ');
    switch (array.length) {
      case 1:
        return `${array[0][0].toUpperCase()}`;
      default:
        return `${array[0][0].toUpperCase()}${array[1][0].toUpperCase()}`;
    }
  };

  function stringAvatar(name) {
    const avatarName = splitName(name);

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: avatarName,
    };
  }

  return (
    <List sx={{ p: 0 }}>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          sx={{ paddingLeft: '0px', paddingRight: '32px' }}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              color="primary"
              onClick={() =>
                dispatch(contactsOperations.deleteContact({ id, name }))
              }
              sx={{ marginRight: '-28px' }}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar {...stringAvatar(name)} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            sx={{
              flexGrow: 4,
              color: 'text.primary',
              textTransform: 'capitalize',
            }}
          />
          <ListItemText
            primary={number}
            sx={{ textAlign: 'end', color: 'text.primary' }}
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
