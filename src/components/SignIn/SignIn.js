import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import { Box, Button, Toast, Container, Text, TextField, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error! Email atau passsword salah!');
      console.error('Error! Email atau Password salah!', error);
    });
  };

  return (
    <div>
      <Box padding={3}>
        <Container>
          <Box padding={3}>
            {error !== null && <Toast text={error} />}
            <Heading size="md">Login</Heading>
            <p>silahkan masuk untuk memulai digital signature</p>
          </Box>
          <Box padding={2}>
            <TextField id="email" onChange={(event) => setEmail(event.value)} placeholder="Enter your email" label="Email" value={email} type="email" />
          </Box>
          <Box padding={2}>
            <TextField id="password" onChange={(event) => setPassword(event.value)} placeholder="Enter your password" label="Password" value={password} type="password" />
          </Box>
          <Box padding={2}>
            <Button
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
                navigate('/');
              }}
              text="Masuk"
              color="blue"
              inline
            />
          </Box>

          <Box padding={2}>
            <Text>or</Text>
          </Box>
          <Box padding={2}>
            <Button onClick={signInWithGoogle} text="Masuk dengan Google" color="red" inline />
          </Box>
          <Box padding={2}>
            <Text>Belum mempuyai akun?</Text>
          </Box>
          <Box padding={2}>
            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
              Daftar disini
            </Link>
          </Box>
          <Box padding={2}>
            <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
              Lupa Password?
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
export default SignIn;
