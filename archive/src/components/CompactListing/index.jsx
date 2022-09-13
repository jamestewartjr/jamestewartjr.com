import React from 'react'
import { Chip } from '@material-ui/core';
import moment from "moment";
import "./CompactListing.scss";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const CompactListing = (props) => {
  const {data} = props;
  const twoWeeksAgo = moment().subtract(14,'days');

  return (
    <section className="compact_listing">
      <List component="nav" aria-label="compact_listing">
        {data.map(post => {
          return(
            <ListItem
              button
              component="a"
              key={post.title}
              href={post.path}
              className={`compact_listing_${post.title}`}
            >
              <ListItemText 
                primary={<Typography variant="h6">{post.title}</Typography>}
              />
              {moment(post.date) > twoWeeksAgo
                ? <Chip label="NEW" color="secondary" />
                : null 
              }
            </ListItem>
          )
        })}
      </List>
    </section>
  )
}

export default CompactListing;