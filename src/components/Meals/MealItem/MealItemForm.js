import { Button, Grid, TextField } from '@mui/material';
import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState(1);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = enteredValue;
    const enteredAmountNumber = +enteredAmount;

    if (
      // enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    console.log(enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
  };

  const onChangeHandler = (event) => {
    // const enteredAmountNumber = event.target.value;
    // // const enteredAmountNumber = +enteredAmount;

    // if (
    //   enteredAmount.trim().length === 0 ||
    //   enteredAmountNumber < 1 ||
    //   enteredAmountNumber > 5
    // ) {
    //   setAmountIsValid(false);
    //   // return;
    // }
    setEnteredValue(event.target.value);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler} noValidate>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <TextField
            sx={{width: "110px"}}
            value={enteredValue}
            onChange={onChangeHandler}
            label="Amount"
            type="number"
            error={!amountIsValid}
            helperText={!amountIsValid ? "Please enter a valid amount (1-5)." : ""}
          />
        </Grid>
        <Grid item>
          <Button type="submit">+ Add</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MealItemForm;
