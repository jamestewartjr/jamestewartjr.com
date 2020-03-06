import React, { Component } from "react";
import { Button } from '@material-ui/core';
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { labeled, config: { userLinks } } = this.props;
    return userLinks.map(link => (
      <Button
        color="secondary"
        key={link.label}
        className={link.iconClassName}
        href={`${link.url}`}
      >
        {labeled ? link.label : ""}
      </Button>
    ));
  }

  render() {
    const { config: { userLinks } } = this.props;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
