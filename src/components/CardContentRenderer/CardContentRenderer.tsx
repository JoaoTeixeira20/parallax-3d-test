import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';

const CardContentRenderer = (): ReactElement => {
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0,0);
  },[350])

  return (
      <CardContent index={Number(params['id'])} />
  );
};

export default CardContentRenderer;
