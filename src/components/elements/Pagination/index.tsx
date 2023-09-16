'use client';

import Button from '@/components/elements/Button';
import Text from '@/components/elements/Text';

import { PaginationContainer } from './styles';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onNext,
  onPrevious
}) => {
  return (
    <PaginationContainer>
      <Button
        variant="outline"
        onClick={onPrevious}
      >
        -
      </Button>

      <Text>
        {currentPage}
      </Text>

      <Button
        variant="outline"
        onClick={onNext}
      >
        +
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
