import * as React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { RadioButton, RadioButtonInput, RadioButtonLabel } from './styles';

type Props = {
  radioProps: Array<{ label: string; value: string | number }>;
  selectedIndex?: number;
  onButtonPress(index: number): void;
};

const RadioButtonPerson: React.FC<Props> = ({
  radioProps,
  selectedIndex = 0,
  onButtonPress,
}) => {
  const isSelected = (i: number): boolean => selectedIndex === i;

  return (
    <RadioForm formHorizontal animation>
      {radioProps.map((obj, i) => (
        <RadioButton labelHorizontal key={i}>
          <RadioButtonInput
            obj={obj}
            index={i}
            onPress={() => onButtonPress(i)}
            selectedIndex={isSelected(i)}
            isSelected={isSelected(i)}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal
            onPress={() => {}}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

export default RadioButtonPerson;
