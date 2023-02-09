'use client';
import React, { ElementType, HTMLAttributes, FC } from 'react';
import { Grid, Row, Col, Radio } from '@nextui-org/react';
import loadable from '@loadable/component';

const ValidInput = loadable(() => import('./ValidInput'));

export const inputType = {
  input: ValidInput,
  radio: Radio,
};

type ItemType = {
  title?: string;
  elem?: ElementType;
};

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const InputStatus: FC<ComponentProps> = ({
  as: Tag = ValidInput,
  ...props
}) => {
  if (typeof Tag !== undefined) return <Tag {...props} />;
  else return <div>error</div>;
};

const Item = ({ title = 'title', elem = inputType.input }: ItemType) => {
  return (
    <Col>
      <Row>
        <div>
          <span>{title}</span>
        </div>
        <InputStatus as={elem} />
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
