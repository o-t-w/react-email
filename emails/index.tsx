import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import { Container } from '@react-email/container';
import {Tailwind} from '@react-email/tailwind';
import { Head } from '@react-email/head';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
                <Tailwind
      config={{
        theme: {
            colors: {
              blue: '#075ff0',
              pink: '#ff9999'
          },
        },
      }}
    >
      <Head>
      <title>My email title</title>
    </Head>

     <Container className="bg-blue">
    <h1 className="text-pink">Hello, internet</h1>
     <Button
        className="bg-blue hover:bg-pink"
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff', border: 'solid 2px white' }}
      >
        Click me
      </Button>
     </Container>
     </Tailwind>
    </Html>
  );
}