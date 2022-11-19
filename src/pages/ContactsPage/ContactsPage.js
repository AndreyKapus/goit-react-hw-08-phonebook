import ContactForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList';
import { ToastContainer } from 'react-toastify';
import { StyledMainTittle } from './Contacts.styled';
import useAuth from 'hooks/useHook';
import { ContactsContainer } from './Contacts.styled';
import StartLogOutPage from '../../components/StartPage/StartPage';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <div>
      {/* <Layout /> */}

      <StyledMainTittle>PhoneBook</StyledMainTittle>
      <ContactsContainer>
        <ContactForm />
        <ContactsList />
        <Filter />
      </ContactsContainer>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  ) : (
    <StartLogOutPage />
  );
};
