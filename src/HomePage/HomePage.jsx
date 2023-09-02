import { Grid } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Carousal from '../Carousal/Carousal';
import ImageCard from '../ImageCard/ImageCard';
import locationData from '../server/Location';

const HomePage = () => {
  const [data, setData] = useState(locationData);
  useEffect(() => {}, []);

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Grid className="mx-auto">
      <Header />
      <Carousal />
      <Grid container spacing={3} className="ms-5 me-2 mt-2">
        {locationData.results.map((ar) => (
          <Grid item>
            <ImageCard locDetails={ar} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HomePage;
