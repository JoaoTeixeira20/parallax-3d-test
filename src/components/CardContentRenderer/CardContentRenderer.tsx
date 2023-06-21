import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';

const CardContentRenderer = (): ReactElement => {
  const params = useParams();

  return (
      <CardContent index={Number(params['id'])} />
  );
};

export default CardContentRenderer;
