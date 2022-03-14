import { ChangeEvent, FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import Cookie from 'js-cookie';
import axios from 'axios';

const ThemesPage: FC = (props) => {
  console.log(props);
  const [theme, setTheme] = useState('light');

  const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const themeSelected = e.target.value;
    setTheme(themeSelected);
    Cookie.set('theme', themeSelected);
    localStorage.setItem('theme', themeSelected);
  };

  const requesApi = async () => {
    const { data } = await axios.get('/api/hello');
    console.log(data);
  };

  useEffect(() => {
    console.log('Cokie: ', Cookie.get('theme'));
    console.log('localStorage', localStorage.getItem('theme'));
  }, [theme]);

  return (
    <MainLayout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Themes for App</FormLabel>
            <RadioGroup value={theme} onChange={handleChangeTheme}>
              <FormControlLabel value='light' control={<Radio />} label='Ligth' />
              <FormControlLabel value='dark' control={<Radio />} label='Dark' />
              <FormControlLabel value='custom' control={<Radio />} label='Custom' />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <Button onClick={requesApi}>Request</Button>
      </Card>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const themes = ['light', 'dark', 'custom'];

  const cookies = req.cookies;

  console.log(cookies);
  return {
    props: {
      theme: themes.includes(cookies.theme) ? cookies.theme : 'light',
    },
  };
};

export default ThemesPage;
