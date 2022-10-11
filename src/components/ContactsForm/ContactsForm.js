import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, AddButton } from './contactsForm.styled';

export function ContactForm({ onSubmit }) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'contactName') {
      setContactName(value);
    }
    if (name === 'contactNumber') {
      setContactNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ contactName, contactNumber });
    setContactName('');
    setContactNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          name="contactName"
          value={contactName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="text"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          name="contactNumber"
          value={contactNumber}
          onChange={handleChange}
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
