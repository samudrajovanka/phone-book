import XMarkIcon from '@/assets/icons/x-mark.svg';
import Text from '@/components/elements/Text';
import Button from '@/components/elements/Button';

import {
  HeaderContainer,
  ModalBodyContainer,
  ModalContainer
} from './styles';
import type { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title
}) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalBodyContainer>
        <HeaderContainer>
          <Text as="h3" fontWeight="bold">{title}</Text>

          <Button
            title="Close modal"
            color="error"
            variant="outline"
            onClick={onClose}
          >
            <XMarkIcon />
          </Button>
        </HeaderContainer>

        {children}
      </ModalBodyContainer>
    </ModalContainer>
  );
};

export default Modal;
