'use client';
import React, {
  ElementType,
  HTMLAttributes,
  FC,
  ReactNode,
  PropsWithChildren,
} from 'react';
import { Grid, Row, Col, Radio } from '@nextui-org/react';
import loadable from '@loadable/component';

const ValidInput = loadable(() => import('./ValidInput'));

type Props = PropsWithChildren<{
  type?: 'primary' | 'danger' | 'light' | 'dark';
  style?: 'fill' | 'outline' | 'weak' | 'flat';
  display?: 'inline' | 'block' | 'full';

  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

export const inputType = {
  input: ValidInput,
  radio: Radio,
};

type ItemType = {
  title?: string;
  elem?: ElementType;
  // value?: string | number;
};

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const InputStatus: FC<ComponentProps> = ({
  as: Tag = ValidInput,
  ...props
}) => {
  if (typeof Tag !== undefined) {
    return <Tag {...props} />;
  } else return <div>error</div>;
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
        {/* <Item title={title} elem={elem} /> */}
        <div>{title}</div>
      </Grid>
    </Grid.Container>
  );
}
