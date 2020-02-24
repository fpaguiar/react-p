import React from 'react';
import {Content} from './styles';

type TitleProps = {
  value: string;
}

const Title = ({value}: TitleProps) => {
  return (
    <div>
      <Content>{value}</Content>
    </div>
  );
};

export default Title;
