import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state);

  const filteredContactList = () => {
    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.filter.toLowerCase())
        )
      : contacts;
  };

  const deleteContactHandler = event => {
    const { id } = event.currentTarget;
    dispatch(deleteContact({ id }));
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
