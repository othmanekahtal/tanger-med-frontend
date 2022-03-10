import validator from "validator";

import { TextField, Alert, Stack } from "@mui/material";
import { useState } from "react";
function Input({
  type = "text",
  required = false,
  defaultValue = "",
  validation = null,
  label,
  name,
  visibility = true,
  onBlurEventHandle,
  onChangeEventHandle,
  iconStarting,
}) {
  const [value, setValue] = useState(defaultValue);
  const [errorValue, setErrorValue] = useState("");
  const defaultChangeEvent = (event) => setValue(event.target.value);
  const defaultOnBlurEvent = (event) => {
    setErrorValue(value ? "" : `fill input please of ${name}`);
    if (validation === "email") {
      if (!validator.isEmail(value))
        setErrorValue("Please enter valid email address");
    }
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        value={value}
        type={visibility ? type : "password"}
        required={required}
        onChange={onChangeEventHandle ?? defaultChangeEvent}
        onBlur={onBlurEventHandle ?? defaultOnBlurEvent}
      />
      {errorValue ? <Alert severity="error">{errorValue}</Alert> : null}
    </Stack>
  );
}

export default Input;
