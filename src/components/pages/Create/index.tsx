import Container from '@/components/elements/Container';
import {
  CreateForm,
  Header
} from '@/components/parts/Create';

const Create = () => {
  return (
    <Container className="margin-y-layout">
      <Header />

      <CreateForm />
    </Container>
  );
};

export default Create;
