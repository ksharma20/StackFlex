import { Container } from '@chakra-ui/react';
import { SignIn } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

function Home() {
  const [redirectTo, setRedirectTo] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href);

    if (urlParams.has('redirect_url')) {
      return setRedirectTo(urlParams.get('redirect_url') || '');
    }
  }, []);

  return (
    <Container maxW='container.xl' p={10}>
      <SignIn signUpUrl='/sign-up' redirectUrl={redirectTo} />
    </Container>
  );
}

export default Home;
