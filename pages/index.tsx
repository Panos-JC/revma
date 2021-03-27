import {
  AppBar,
  Avatar,
  Button,
  Card,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { BeachAccess, Image, Work } from "@material-ui/icons";
import Head from "next/head";
import React from "react";
import { DisplayCard } from "../components/DisplayCard";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { ForHome } from "../components/ForHome";
import { ForBusiness } from "../components/ForBusiness";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#e7e9eb",
  },
  appBar: {
    background: "transparent",
    padding: 20,
  },
  logo: {
    height: 50,
  },
  container: {
    padding: 20,
  },
  jumbatron: {
    height: 500,
    backgroundImage:
      "linear-gradient(-45deg, rgba(50,61,119,1) 16%, rgba(188,17,24,1) 100%)",
    // backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "400% 400%",
    animation: "$gradient 15s ease infinite",
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 350,
    color: "white",
    padding: "100px 25px 50px 25px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      margin: "20px 0 20px 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: "50px 25px 50px 25px",
    },
  },
  headings: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  section: {
    padding: "0 100px 50px 100px",
    marginTop: 100,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 400,
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  sectionTitle: {
    marginBottom: 50,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.root}>
        <div className={classes.jumbatron}>
          <AppBar position="static" className={classes.appBar} elevation={0}>
            <Toolbar>
              <Grid container>
                <Grid xs={1} item>
                  <img className={classes.logo} src="/logo.svg" alt="" />
                </Grid>
              </Grid>
              <Button color="inherit" variant="outlined">
                Home
              </Button>
            </Toolbar>
          </AppBar>

          <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} sm={12} md={6} className={classes.titles}>
              <Typography variant="h2">Οικιακό Ρεύμα</Typography>
              <Typography variant="h5">
                Ρεύμα με τις χαμηλότερες χρεώσεις στην αγορά
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Form />
            </Grid>
          </Grid>
        </div>

        <section className={classes.section}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Άλλαξε πάροχο ρεύματος και αερίου σε 3 απλά βήματα
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              margin: 0,
              width: "100%",
            }}
          >
            <Grid item xs={12} md={4}>
              <DisplayCard
                src="/notes.png"
                title="Συμπληρώνεις τη φόρμα"
                content="Συμπλήρωσε την αντίστοιχη φόρμα και θα επικοινωνήσουμε μαζί
                  σου."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DisplayCard
                src="/phone-call.png"
                title="Επικοινωνούμε μαζί σου"
                content="Eξειδικευμένος εκπρόσωπός μας θα σε καλέσει για μια πλήρη και
                  ξεκάθαρη ενημέρωση των προσφορών μας."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DisplayCard
                src="/wallet.png"
                title="Αρχίζεις να κερδίζεις!"
                content="Η διαδικασία είναι απλή για να γίνεις και εσύ πελάτης της ΗΡΩΝ
                  και να αρχίσεις να κερδίζεις αμέσως!"
              />
            </Grid>
          </Grid>
        </section>
      </main>
      <ForHome />
      <ForBusiness />
      <Footer />
    </div>
  );
}
