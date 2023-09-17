'use client';

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo
} from 'react';

import { useRouter } from 'next/navigation';

import Text from '@/components/elements/Text';
import Pagination from '@/components/elements/Pagination';
import {
  SkeletonContact,
  ContactItem
} from '@/components/parts/Home';
import { useContacts } from '@/contexts/contacts';

import { ContactListContainer, LinkCreate } from './styles';

const RegularContactList = () => {
  const regularContactsRef = useRef<HTMLDivElement | null>(null);
  const contactsCtx = useContacts();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);

  const regulatContactsLength = useMemo(() => {
    return contactsCtx.regularContacts.data?.contact.length;
  }, [contactsCtx.regularContacts.data?.contact.length]);

  const scrollToView = useCallback(() => {
    window.scrollTo({
      top: (regularContactsRef.current?.offsetTop as number) - 50,
      behavior: 'smooth'
    });
  }, []);

  const handleSuccessDelete = useCallback(() => {
    contactsCtx.regularContacts.refetch(contactsCtx.favoriteIds);
  }, [contactsCtx]);

  const handleSuccessToggleFavorite = useCallback(async (newFavoriteIds: string[]) => {
    await contactsCtx.regularContacts.refetch(newFavoriteIds);
    await contactsCtx.favoriteContacts.refetch(newFavoriteIds);
  }, [contactsCtx.favoriteContacts, contactsCtx.regularContacts]);

  const refetchRegularContacts = useCallback(async (page: number) => {
    await contactsCtx.regularContacts.refetch(contactsCtx.favoriteIds, {
      offset: (page - 1) * 10
    });
  }, [contactsCtx.favoriteIds, contactsCtx.regularContacts]);

  const handleNextPage = useCallback(async () => {
    if (!regulatContactsLength) {
      return;
    }

    const nextPage = currentPage + 1;

    scrollToView();

    await refetchRegularContacts(nextPage);

    setCurrentPage(nextPage);
  }, [currentPage, refetchRegularContacts, scrollToView, regulatContactsLength]);

  const handlePreviousPage = useCallback(async () => {
    if (currentPage === 1) {
      return;
    }

    const nextPage = currentPage - 1;
    
    scrollToView();

    await refetchRegularContacts(nextPage);

    setCurrentPage(nextPage);
  }, [currentPage, refetchRegularContacts, scrollToView]);

  return (
    <div ref={regularContactsRef}>
      <Text fontWeight="medium">Regular Contact</Text>

      <ContactListContainer>
        {contactsCtx.regularContacts.loading && contactsCtx.regularContacts.fetchCount === 0 ? (
          <>
            {Array.from(Array(4).keys()).map((_, index) => (
              <SkeletonContact key={index} />
            ))}
          </>
        ) : null}

        {!contactsCtx.regularContacts.loading || contactsCtx.regularContacts.fetchCount > 0 ? (
          <>
            {regulatContactsLength ? (
              <>
                {contactsCtx.regularContacts.data?.contact.map((contact) => (
                  <ContactItem
                    key={contact.id}
                    id={contact.id}
                    firstName={contact.first_name}
                    lastName={contact.last_name}
                    phones={contact.phones}
                    onSuccessDelete={handleSuccessDelete}
                    onSuccessToggleFavorite={handleSuccessToggleFavorite}
                  />
                ))}
              </>
            ) : (
              <>
                {currentPage === 1 ? (
                  <Text typography="sm">
                    You don&apos;t have a regular contact. For add a new contact, you can click{' '}
                    <LinkCreate href="/create">here</LinkCreate>.
                  </Text>
                ) : (
                  <Text typography="sm">
                    You&apos;ve reached the end of the list. Back to the previous page.
                  </Text>
                )}
              </>
            )}

            {regulatContactsLength || currentPage > 1 ? (
              <Pagination
                currentPage={currentPage}
                onNext={handleNextPage}
                onPrevious={handlePreviousPage}
              />
            ) : null}
          </>
        ) : null}
      </ContactListContainer>
    </div>
  );
};

export default RegularContactList;
