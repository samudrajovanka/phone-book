import AppoloProvider from '@/components/parts/AppoloProvider';
import ContactsProvider from '@/contexts/contacts';
import SearchContactProvider from '@/contexts/searchContact';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AppoloProvider>
      <SearchContactProvider>
        <ContactsProvider>
          {children}
        </ContactsProvider>
      </SearchContactProvider>
    </AppoloProvider>
  );
};

export default Providers;
