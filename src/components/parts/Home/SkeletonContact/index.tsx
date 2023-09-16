'use client';

import { ContactContainer, Skeleton } from './styles';

const SkeletonContact = () => {
  return (
    <ContactContainer>
      <div>
        <Skeleton $width="20rem" />

        <Skeleton $width="8rem" $marginTop="1rem" />
        <Skeleton $width="12rem" $marginTop="0.5rem" />
        <Skeleton $width="10rem" $marginTop="0.5rem" />
      </div>

      <Skeleton $width="1rem" />
    </ContactContainer>
  );
};

export default SkeletonContact;
