import { FC } from 'react';
interface Props {
  children: React.ReactNode;
  props?: Props;
  className?: string;
}
export const Container: FC<Props> = (props) => {
  return <div {...props} className="container mx-auto px-3">{props.children}</div>;
};
