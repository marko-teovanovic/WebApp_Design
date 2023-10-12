import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:8080');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Graphic & 3D Design</h1>
      </header>
      <main>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>3d design</Button>
      <Button>2d desing</Button>
      <Button>Graphic design</Button>
    </ButtonGroup>
      </main>
      <footer>
        <p>&copy; 2023 Graphic & 3D Design</p>
      </footer>
    </div>
  );
}

export default App;
