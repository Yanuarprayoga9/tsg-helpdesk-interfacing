import Container from '@/components/container';
import { LoginHeader } from '@/components/login/login-header';
import { LoginForm } from '@/components/login/login-form';
import React from 'react';
import { LoginIcon } from '@/components/login/login-icon';

const index = () => {
  return (
    <Container className="py-24 max-w-md">
      <div className="flex flex-col space-y-4 justify-center">
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
