import React, { Component } from "react";
import { Link } from "gatsby";
import moment from "moment";
import {
  Badge,
  Card, 
  CardContent, 
  // CardMedia, 
  Typography
} from '@material-ui/core';
// import {FaCalendarCheck} from 'react-icons/fa'
import PostTags from "../PostTags";
// import PostCover from "../PostCover";
import config from "../../../data/SiteConfig";
import "./PostPreview.scss";

class PostPreview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mobile: true
  //   };
  //   this.handleResize = this.handleResize.bind(this);
  // }

  // componentDidMount() {
  //   this.handleResize();
  //   window.addEventListener("resize", this.handleResize);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.handleResize);
  // }

  // handleResize() {
  //   if (window.innerWidth >= 640) {
  //     this.setState({ mobile: false });
  //   } else {
  //     this.setState({ mobile: true });
  //   }
  // }

  render() {
    const { postInfo } = this.props;
    const formattedpublishedDate = moment(postInfo.date).format(config.dateFormat);
    const twoWeeksAgo = moment().subtract(14,'days');
    const publishedDate =  moment(postInfo.date);

    // const { mobile } = this.state;
    // const expand = mobile;
    // /* eslint no-undef: "off" */
    // const coverHeight = mobile ? 162 : 225;

    return (
      <Card key={postInfo.path} className="md-grid md-cell md-cell--12">
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          {/* <CardMedia src={`${postInfo.cover}`} style={{ height: coverHeight, paddingBottom: "0px" }}> 
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
          </CardMedia> */}
          <CardContent>
            <Typography align="center" variant="h3">
              {postInfo.title}
            </Typography>
          </CardContent>
        </Link>
        <CardContent> 
          <Typography variant="h6">
            {`Published on ${formattedpublishedDate}`}
          </Typography>
          { 
            publishedDate >  twoWeeksAgo
            ? <Badge badgeContent="NEW" color="error" />
            : null 
          }
          <Typography>
            {`${postInfo.timeToRead} min read`}
          </Typography>
          <Typography variant="h5">
            {postInfo.excerpt}
          </Typography>
          <PostTags tags={postInfo.tags} />
        </CardContent>
      </Card>
    );
  }
}

export default PostPreview;
