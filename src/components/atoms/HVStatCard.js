import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import {
  Card,
  Grid,
  CardContent,
  Typography
} from '@material-ui/core';
 import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  title: {
    fontSize: 35,
  },
  titleComingSoon: {
    fontSize: 16,

  },
  subtitle: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

const HVStatCard = ({
  title,
  subtitle,
  loading,
  isComingSoon,
  children,
}) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      
        {loading ? 
          <CardContent>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="text" height={30} width="80%"/>
              <Skeleton variant="text" height={10} width="50%"/>
          </Grid>
          </CardContent>
        : 
        <CardContent>
          {children}
          <Typography 
            className={isComingSoon ? classes.titleComingSoon : classes.title} 
            color={ isComingSoon ? "textSecondary" : "textPrimary" }
          >
            {title}
          </Typography>
          <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
            {subtitle}
          </Typography>
        </CardContent>
        }       
    </Card>
  );
}

HVStatCard.propTypes = {
  title: PropTypes.string,
  isComingSoon: PropTypes.bool,
  subtitle: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

HVStatCard.defaultProps = {
  title: "Title",
  isComingSoon: false,
  subtitle: "Subtitle",
  loading: false,
  children: PropTypes.string,
}
export default HVStatCard;