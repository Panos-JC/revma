import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import { Email, Facebook, Instagram, Phone } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "50px 0 50px 0",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  container: {
    maxWidth: "70%",
    margin: "0 auto",
  },
  title: {
    marginBottom: 20,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    maxWidth: 250,
    paddingBottom: 15,
  },
  contactList: {
    listStyle: "none",
    padding: 0,
    "& li": {
      display: "flex",
      alignItes: "center",
      marginBottom: 5,
    },
  },
  icon: {
    marginRight: 5,
  },
  img: {
    width: 200,
  },
}));

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" className={classes.title}>
              Ποιοί είμαστε
            </Typography>
            <Typography variant="caption">
              Η BLANK είναι Επίσημος Συνεργάτης της ΗΡΩΝ και παρουσιάζουμε
              ειδικές, οικονομικές προσφορές σε προγράμματα παροχής Ηλεκτρικού
              Ρεύματος και Φυσικού Αερίου, που απευθύνονται σε ιδιώτες,
              επαγγελματίες και επιχειρήσεις.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className={classes.title}>
              Εμίσημος Συνεργάτης
            </Typography>
            <img className={classes.img} src="/logo.svg" alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h5" className={classes.title}>
              Επικοινωνία
            </Typography>
            <div>
              <a href="#">
                <Facebook className={classes.icon} />
              </a>
              <a href="#">
                <Instagram className={classes.icon} />
              </a>
            </div>
            <ul className={classes.contactList}>
              <li>
                <Phone className={classes.icon} />
                6941234567
              </li>
              <li>
                <Email className={classes.icon} />
                mail@mail.com
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};
