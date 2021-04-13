import React, { Component } from 'react'
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png";
import heartFill from "../../assets/heart-fill.png";


export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter">{this.props.author[0]}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{this.props.cardTitle}</h5>
            <div className="card-date">
              {this.props.date}
            </div>
          </div>
        </div>
        <img className="card-image" src={this.props.food} alt="Logo" />
        <div className="card-text">
          {this.props.description}
        </div>
        <div className="card-like-bar">
          {
            this.props.liked ?
              (<img className="card-like-icon" src={heartFill} alt="Logo" />)
              :
              (<img className="card-like-icon" src={heartOutline} alt="Logo" />)
          }
          <div className="like-text">
            <b>{this.props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
        </div>
      </div>
    )
  }
}