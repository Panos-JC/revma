import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  Card,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 25,
    maxWidth: 500,
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      margin: "0 auto",
      top: 0,
    },
  },
  headings: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
}));

interface formProps {}

export const Form: React.FC<formProps> = ({}) => {
  const classes = useStyles();

  const [state, handleSubmit] = useForm("myylgjgw");

  const [formErrors, setFormErrors] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  if (state.succeeded) {
    return <p>Thank you! We received your submission.</p>;
  }

  return (
    <Card className={classes.card}>
      <div className={classes.headings}>
        <Typography variant="h5">Ζητήστε να σας καλέσουμε</Typography>
        <Typography>
          Συμπληρώστε τα πεδία και ένας εξειδικευμένος εκπρόσωπός μας θα σας
          καλέσει άμεσα.
        </Typography>
      </div>

      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Ονοματεπώνυμο"
          variant="outlined"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          className={classes.input}
          onChange={handleChange}
        />
        <TextField
          name="phone"
          label="Αριθμός"
          variant="outlined"
          className={classes.input}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          ΑΠΟΣΤΟΛΗ
        </Button>
      </form>
      <Link>
        <Typography variant="caption">
          Μάθε πώς τηρούμε τα προσωπικά σου δεδομένα
        </Typography>
      </Link>
    </Card>
  );
};
