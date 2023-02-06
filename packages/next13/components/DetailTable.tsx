import React from 'react';
import { Grid, Row, Col, Radio } from '@nextui-org/react';
import ValidInput from './ValidInput';

type ItemType = {
  title?: string;
  inputType?: any;
};

enum inputType {
  'input' = 'input',
  'radio' = 'radio ',
}

const inputElem = {
  [inputType.input]: ValidInput,
  [inputType.radio]: Radio,
};

type statusProps = {
  status?: inputType;
};

const InputStatus = ({ status = inputType.input }: statusProps) => {
  if (typeof inputElem[status] !== undefined)
    if (status === inputType.input)
      return React.createElement(inputElem[status], { attr: 'text' });
    else return React.createElement(inputElem[status]);
  else return <div>error</div>;
};

const Item = ({ title = 'title', inputType = 'text' }: ItemType) => {
  return (
    <Col>
      <Row>
        <div>
          <span>{title}</span>
        </div>
        <div>{inputType}</div>
      </Row>
    </Col>
  );
};

export default function DetailTable() {
  return (
    <Grid.Container justify='center' gap={0}>
      <Grid xs>
        <Item />
      </Grid>
    </Grid.Container>
  );
}
