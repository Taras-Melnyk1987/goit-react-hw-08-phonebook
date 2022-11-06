import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import AppForm from 'components/Form';
import Section from 'components/Section';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import * as contactsOperations from 'redux/contacts/contactsOperations';
import * as selectors from 'redux/contacts/contactsSelectors';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/authSelectors';

export function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const items = useSelector(selectors.getItems);
  const isLoading = useSelector(selectors.getLoadingStatus);
  const isRefreshingUser = useSelector(getIsRefreshing);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(contactsOperations.fetchContacts());
  }, [isLoggedIn, dispatch]);

  const noContacts = items && items.length === 0;
  const showContacts = items && items.length > 0;
  const showSpiner = isLoading && !items;

  return (
    <>
      {!isRefreshingUser ? (
        <>
          <Section title="Add contact">
            <AppForm contacts={items} />
          </Section>
          <Section title="Contacts">
            {showSpiner && <p>Loading...</p>}
            {showContacts && (
              <>
                <Filter />
                <ContactList />
              </>
            )}
            {noContacts && <p>You haven't any contacts yet!</p>}
          </Section>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

ContactsPage.propTypes = {
  title: PropTypes.string,
};

// {isLoading ? (
//         <p>Loading</p>
//       ) : isLoggedIn && items ? (
//         <>
//           <Section title="Add contact">
//             <AppForm contacts={items} />
//           </Section>

//           <Section title="Contacts">
//             {!isLoading && items.length === 0 && (
//               <p>You haven't any contacts yet!</p>
//             )}
//             {items.length > 0 && (
//               <>
//                 <Filter />
//                 <ContactList />
//               </>
//             )}
//           </Section>
//         </>
//       ) : (
//         <Navigate to="/login" />
//       )}
