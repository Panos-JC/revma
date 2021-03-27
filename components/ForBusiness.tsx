import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "50px 0 50px 0",
    // backgroundColor: theme.palette.secondary.main,
    // background: "rgb(50,61,119)",
  },
  title: {
    marginBottom: 25,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    paddingBottom: 25,
    maxWidth: 325,
  },
  container: {
    maxWidth: "70%",
    margin: "0 auto",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  text: {
    "& .MuiListItemText-primary": {
      fontWeight: "bold",
      marginBottom: 5,
    },
  },
}));

interface ForBusinessProps {}

export const ForBusiness: React.FC<ForBusinessProps> = ({}) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title}>
              Για την επιχείρηση.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.text}
                  primary="UP"
                  secondary="Ο ΗΡΩΝ σου προσφέρει 45% έκπτωση, με κάθε εμπρόθεσμη εξόφληση του λογαριασμού σου, χωρίς καμία χρονική δέσμευση!"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.text}
                  primary="ΝΥΧΤΕΡΙΝΗ ΧΡΕΩΣΗ 24/7"
                  secondary="Ο ΗΡΩΝ σου προσφέρει σταθερή τιμή όλο το 24ωρο, χωρίς καμία χρονική δέσμευση!"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.text}
                  primary="HOME 1"
                  secondary="Τώρα έχεις όλη την ενέργεια που χρειάζεσαι, χωρίς χρονική δέσμευση και πάγιο!"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.text}
                  primary="UP"
                  secondary="Ο ΗΡΩΝ σου προσφέρει 45% έκπτωση, με κάθε εμπρόθεσμη εξόφληση του λογαριασμού σου, χωρίς καμία χρονική δέσμευση!"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.text}
                  primary="ΝΥΧΤΕΡΙΝΗ ΧΡΕΩΣΗ 24/7"
                  secondary="Ο ΗΡΩΝ σου προσφέρει σταθερή τιμή όλο το 24ωρο, χωρίς καμία χρονική δέσμευση!"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.text}
                  primary="HOME 1"
                  secondary="Τώρα έχεις όλη την ενέργεια που χρειάζεσαι, χωρίς χρονική δέσμευση και πάγιο!"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
