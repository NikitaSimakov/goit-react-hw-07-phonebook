import { deleteContact } from 'redux/thunks';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  // const { filter } = useSelector(state => state);
  const filter = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);

  const filteredContactList = () => {
    // console.log(filter.filter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.filter.toLowerCase())
    );
    // return filter
    //   ? contacts.filter(contact =>
    //       contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    //     )
    //   : contacts;
  };
  console.log(filter);

  const deleteContactHandler = event => {
    const { id } = event.currentTarget;
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContactList() &&
        filteredContactList().map(contact => (
          <li className={css.contactList_item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList_button}
              type="button"
              id={contact.id}
              onClick={deleteContactHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
