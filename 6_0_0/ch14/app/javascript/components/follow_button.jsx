import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FollowButton extends Component {
  render() {
    return (
      <button onClick={isFollowing ? this.unfollow : this.follow}>
        {this.state.relationship !== null ? 'Unfollow' : 'Follow'}
      </button>
    )
  }
}

FollowButton.defaultProps = {
  relationship: null
}

FollowButton.propTypes = {
  user: PropTypes.object.isRequired,
  relationship: PropTypes.object
}