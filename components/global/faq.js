import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function FAQ(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.questions.map((item, key) => <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.answers[key]}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
}

export default FAQ;
