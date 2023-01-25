import PropTypes from 'prop-types';

// import styles from './contactsList.module.css';

const ContactsList = ({ removeContact, contacts }) => {
  const phoneContacts = contacts.map(({ id, name, number }) => (
    <li key={id}>
      Name: {name}. Phone number: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return <ul>{phoneContacts}</ul>;
};

export default ContactsList;

ContactsList.defaultProps = { contacts: [] };

ContactsList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
