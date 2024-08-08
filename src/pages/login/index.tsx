import Container from '@/components/ui/container';
import { LoginHeader } from '@/components/@pagecomponents/login/login-header';
import { LoginForm } from '@/components/@pagecomponents/login/login-form';
import React from 'react';
import { LoginIcon } from '@/components/@pagecomponents/login/login-icon';

const index = () => {
  return (
    <Container className="py-12 md:py-24 max-w-xl ">
      <div className="flex flex-col bg-whitesmoke1 shadow-md rounded-lg p-8 space-y-8 justify-center">
        <LoginIcon />
        <LoginHeader
          heading="Helpdesk Web App"
          subHeading="PT. Tristar Surya Gemilang"
        />
        <LoginForm />
      </div>
    </Container>
  );
};

export default index;
