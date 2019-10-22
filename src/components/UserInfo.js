import React, { Component } from 'react'
import youtube from '../images/youtube.svg'
import me from '../../content/images/foto-circle-small.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
              I'm Raja Arif , a Web  Developer Specializing from Medan.
            </p>
            {/* <a href="https://youtube.com/ihwand" className="donate-button" target="_blank">
              Support My Channel
              {' '}
            <img src={youtube} className="coffee-icon" />
            </a> */}
          </div>
          <div className="flex-avatar">
            <img className="avatar" src={me} />
          </div>
        </div>
      </aside>
    )
  }
}