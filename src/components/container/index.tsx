import { FC } from 'react';
interface Props {
  children: React.ReactNode;
  props?: Props;
  className?: string;
}
export const Container: FC<Props> = (props) => {
  return <div {...props}>{props.children}</div>;
};
