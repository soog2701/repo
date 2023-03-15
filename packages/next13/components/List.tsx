'use client';
import { ReactNode } from 'react';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T extends unknown>(props: Props<T>) {
  const { items, renderItem } = props;

  return <div>{items.map(renderItem)}</div>;
}
