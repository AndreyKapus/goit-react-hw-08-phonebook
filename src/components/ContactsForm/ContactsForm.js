import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'components/Redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Form, Label, Input, AddButton } from './contactsForm.styled';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = { id: nanoid(), ...form };

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === inputValue.name.toLocaleLowerCase()
      )
    ) {
      clear();
      return alert('this contact allready exist');
    }
    dispatch(createContact(inputValue));
  };

  const clear = () => {
    setForm({ name: '', number: '' });
  };

  const { name, number } = form;
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          name="name"
          value={name}
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
          name="number"
          value={number}
          onChange={handleChange}
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};
