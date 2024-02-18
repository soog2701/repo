import React from 'react';
import UiButton from './components/common/UiButton';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <UiButton>test</UiButton>
      <Button as='a' variant='primary'>
        Button as link
      </Button>
    </div>
  );
}

export default App;
