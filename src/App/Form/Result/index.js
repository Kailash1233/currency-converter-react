import { Wrapper, Text } from "./styled";

const Result = ({ hideResult, resultValue, convertedCurrency }) => {
  return (
    <Wrapper $hideResult={hideResult}>
      <Text>
      The converted value is: {resultValue} {convertedCurrency}
      </Text>
    </Wrapper>
  );
};

export default Result;
