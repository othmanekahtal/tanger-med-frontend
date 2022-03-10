import Input from "@components/Input";
import { Button, Snackbar, Box, Alert } from "@mui/material";

import { useState } from "react";

function home() {
  const [inputEmail, setInputEmail] = useState({
    type: "email",
    label: "Address email",
    name: "email",
    validation: "email",
  });
  const [inputPassword, setInputPassword] = useState({
    label: "Password",
    name: "password",
    visibility: false,
  });
  const [showValue, setShowValue] = useState(false);
  const sendData = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));
    if (!(email && password)) setShowValue(true);
  };
  return (
    <>
      <Snackbar
        open={showValue}
        onClose={() => setShowValue(false)}
        autoHideDuration={2500}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => setShowValue(false)}
        >
          Please fill fields above !
        </Alert>
      </Snackbar>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "h6.fontSize",
            mb: 2,
          }}
        >
          Login form
        </Box>
        <form action="" method="post" onSubmit={sendData}>
          <Box sx={{ mb: 2 }}>
            <Input {...inputEmail} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Input {...inputPassword} />
          </Box>
          <Button type="submit" variant="contained" sx={{ width: "100%" }}>
            login
          </Button>
        </form>
      </Box>
    </>
  );
}

export default home;
