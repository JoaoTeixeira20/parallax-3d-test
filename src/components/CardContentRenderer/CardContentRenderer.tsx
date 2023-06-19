import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';

const CardContentRenderer = (): ReactElement => {
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    },250)
  }, []);

  return (
      <CardContent index={Number(params['id'])} />
  );
};

export default CardContentRenderer;
