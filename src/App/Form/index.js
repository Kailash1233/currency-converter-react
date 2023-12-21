import React, { useState, useEffect } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { currencies } from "../../currencies";
import Label from "./Label";
import {
  StyledForm,
  Fieldset,
  Legend,
  Field,
  Option,
  Wrapper,
  Button,
  StyledInfo,
} from "./styled";

const apiKey = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;

export const Form = () => {
  const [initialCurrency, setInitCurrency] = useState("INR");
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [hideResult, setHideResult] = useState(true);
  const [resultValue, setResultValue] = useState(0);
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest?apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.json();
        console.log("Exchange Rates:", data.rates);
        setExchangeRates(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error.message);
      }
    };

    fetchExchangeRates();
  }, []); 

  const onFormSubmit = (event) => {
    event.preventDefault();

    const initialCurrencyRate = exchangeRates[initialCurrency];
    const convertedCurrencyRate = exchangeRates[convertedCurrency];

    setResultValue(
      ((amount * convertedCurrencyRate) / initialCurrencyRate).toFixed(2)
    );

    setHideResult(false);
  };

  const resetForm = (event) => {
    event.preventDefault();
    setAmount("");
    setInitCurrency("INR");
    setConvertedCurrency("USD");
    setHideResult(true);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Currency Converter</Legend>
        <Clock />
        <Label
          text="Select currency"
          content={
            <Field
              as="select"
              value={initialCurrency}
              onChange={({ target }) => setInitCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <Option key={currency.name}>{currency.name}</Option>
              ))}
            </Field>
          }
        />

        <Label
          text="Enter a value *"
          content={
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Enter the amount"
              type="number"
              required
              step="0.01"
            />
          }
        />

        <Label
          text="Select currency"
          content={
            <Field
              as="select"
              value={convertedCurrency}
              $defaultValue="USD"
              onChange={({ target }) => setConvertedCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <Option key={currency.name}>{currency.name}</Option>
              ))}
            </Field>
          }
        />

        <Wrapper>
          <Button>Calculate</Button>
          <Button onClick={resetForm}>Clear</Button>
        </Wrapper>

        <StyledInfo>Fields marked with * are required.</StyledInfo>
      </Fieldset>

      <Result
        hideResult={hideResult}
        resultValue={resultValue}
        convertedCurrency={convertedCurrency}
      />
    </StyledForm>
  );
};
