import React, { Component } from "components/UserInfo/react";
import Card from "components/UserInfo/react-md/lib/Cards/Card";
import CardTitle from "components/UserInfo/react-md/lib/Cards/CardTitle";
import CardText from "components/UserInfo/react-md/lib/Cards/CardText";
import Avatar from "components/UserInfo/react-md/lib/Avatars";
import FontIcon from "components/UserInfo/react-md/lib/FontIcons";
import IconSeparator from "components/UserInfo/react-md/lib/Helpers/IconSeparator";
import { Follow } from "components/UserInfo/react-twitter-widgets";
import UserLinks from "../UserLinks";
import "./UserInfo.scss";

class UserInfo extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userLocation,
      userDescription,
      userLinks,
      userTwitter
    } = this.props.config;
    const { expanded } = this.props;
    const userLinksElement = (
      <UserLinks config={this.props.config} labeled={expanded} />
    );
    if (!userAvatar && !userName && !userLocation && !userDescription) {
      if (userLinks) {
        return (
          <Card className="md-grid md-cell md-cell--12 user-info">
            {userLinksElement}
          </Card>
        );
      }
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12 user-info">
        <CardTitle
          expander={!expanded}
          avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
          title={userName && userName}
          subtitle={
            userTwitter ? (
              <Follow
                username={userTwitter}
                options={{ count: expanded ? "none" : "none" }}
              />
            ) : (
              "Author"
            )
          }
        />
        <CardText expandable={!expanded}>
          {userLocation && (
            <IconSeparator label={userLocation} iconBefore>
              <FontIcon iconClassName="fa fa-map-marker" />
            </IconSeparator>
          )}
          <p>{userDescription && userDescription}</p>
          {userLinksElement}
        </CardText>
      </Card>
    );
  }
}

export default UserInfo;
