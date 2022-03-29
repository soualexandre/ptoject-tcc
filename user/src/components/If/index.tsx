type Props = {
  children: any;
  condition: boolean;
};

const If = ({ children, condition }: Props): JSX.Element | null =>
  condition ? children : null;

export default If;
