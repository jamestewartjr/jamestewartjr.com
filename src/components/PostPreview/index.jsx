import React, { Component } from "react";
import { Link } from "gatsby";
import moment from "moment";
// import Card from "react-md/lib/Cards/Card";
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
// import CardTitle from "react-md/lib/Cards/CardTitle";

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
    // const { mobile } = this.state;
    // const expand = mobile;
    // /* eslint no-undef: "off" */
    // const coverHeight = mobile ? 162 : 225;

    return (
      <Card key={postInfo.path} className="md-grid md-cell" xs={12} sm={6} md={4} lg={4}>
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          {/* <CardMedia src={`${postInfo.cover}`} style={{ height: coverHeight, paddingBottom: "0px" }}> 
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
          </CardMedia> */}
          <CardContent>
            <Typography>
              {postInfo.title}
            </Typography>
          </CardContent>
        </Link>
        <CardContent> 
          <Typography>
            {`Published on ${moment(postInfo.date).format(config.dateFormat)}`}
          </Typography>
          <Typography>
            {`${postInfo.timeToRead} min read`}
          </Typography>
          <Typography>
            {postInfo.excerpt}
            
          </Typography>
          <PostTags tags={postInfo.tags} />
        </CardContent>
      </Card>
    );
  }
}

export default PostPreview;
