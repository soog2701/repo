'use client';
import React from 'react';
import { Grid, Row, Col, Radio } from '@nextui-org/react';
import ValidInput from './ValidInput';

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

type ItemType = {
  title?: string;
  elem?: inputType;
};

const InputStatus = ({ status = inputType.input }: statusProps) => {
  if (typeof inputElem[status] !== undefined)
    if (status === inputType.input)
      return React.createElement(inputElem[status], { attr: 'text' });
    else return React.createElement(inputElem[status]);
  else return <div>error</div>;
};

const Item = ({ title = 'title', elem = inputType.input }: ItemType) => {
  return (
    <Col>
      <Row>
        <div>
          <span>{title}</span>
        </div>
        <div>{elem}</div>
        <InputStatus status={elem} />
      </Row>
    </Col>
  );
};

export default function DetailTable({ title, elem }: ItemType) {
  return (
    <Grid.Container justify='center' gap={0}>
      <Grid xs>
        <Item title={title} elem={elem} />
      </Grid>
    </Grid.Container>
  );
}
