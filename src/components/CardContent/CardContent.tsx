import React, { ReactElement } from 'react';

type CardContentProps = {
  index: number;
};

const CardContent = (props: CardContentProps): ReactElement => {
  return <div>hello card content, my index is {props.index}</div>;
};

export default CardContent;
