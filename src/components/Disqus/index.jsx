import React, { Component } from "components/Disqus/react";
import ReactDisqusComments from "components/Disqus/react-disqus-comments";
import urljoin from "components/Disqus/url-join";
import Card from "components/Disqus/react-md/lib/Cards/Card";
import CardTitle from "components/Disqus/react-md/lib/Cards/CardTitle";
import CardText from "components/Disqus/react-md/lib/Cards/CardText";
import Avatar from "components/Disqus/react-md/lib/Avatars";
import FontIcon from "components/Disqus/react-md/lib/FontIcons";
import Snackbar from "components/Disqus/react-md/lib/Snackbars";
import config from "../../../data/SiteConfig";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }

  render() {
    const { postNode, expanded } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(
      config.siteUrl,
      config.pathPrefix,
      postNode.fields.slug
    );

    return (
      <Card className="md-grid md-cell md-cell--12">
        <CardTitle
          title="Comments"
          avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
          expander={!expanded}
        />
        <CardText expandable={!expanded}>
          <ReactDisqusComments
            shortname={config.disqusShortname}
            identifier={post.title}
            title={post.title}
            url={url}
            category_id={post.category_id || null}
            onNewComment={this.notifyAboutComment}
          />
        </CardText>
        <Snackbar
          toasts={this.state.toasts}
          onDismiss={this.onSnackbarDismiss}
        />
      </Card>
    );
  }
}

export default Disqus;
