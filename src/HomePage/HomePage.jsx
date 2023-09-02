import { Grid } from '@mui/material';
import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Carousal from '../Carousal/Carousal';
import ImageCard from '../ImageCard/ImageCard';
const HomePage = () => {
  return (
    <Grid>
      <Header />
      <Carousal />
      <ImageCard/>
    </Grid>
  );
};

export default HomePage;
