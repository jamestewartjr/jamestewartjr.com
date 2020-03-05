import React, { Component } from "react";
import {Typography} from "@material-ui/core"
import { Link } from "gatsby";
import moment from "moment";
import _ from "lodash";
import config from "../../../data/SiteConfig";
import "./PostInfo.scss";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <Typography variant="h6">
          {`Published: ${moment(postNode.fields.date).format(
            config.dateFormat
          )}`}
        </Typography>
        <Typography variant="h6">
          {`${postNode.timeToRead} min read`}
        </Typography>
        <Typography variant="h6">
          <span>Category: </span> 
          <Link
            className="category-link"
            to={`/categories/${_.kebabCase(post.category)}`}
          >
            {post.category}
          </Link>
        </Typography>
      </div>
    );
  }
}

export default PostInfo;
