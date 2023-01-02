import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { showTrack } from "../server";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      tracks: [],
    };
  }
  componentDidMount() {
    showTrack().then((track) => {
      const tracks = track.artists.artist;
      console.log("componentDidMount track", tracks);
      this.setState({
        tracks: tracks,
      });
    });
  }
  render() {
    const tracks = this.state.tracks;
    return (
      <div className="h-container">
        <div className="h-artists-wrapper">
          <div className="h-artists-section">
            {tracks.map((track) => {
              const name = track.name;
              const link = "/artist/" + name;
              return (
                <Link to={link} className="h-artist">
                  <img
                    src={track.image[4]["#text"]}
                    className="h-img"
                    alt="Artist Page"
                  />
                  <div>
                    <h3 className="h-artist-name">Artist</h3>
                    <h2>{track.name}</h2>
                  </div>
                  <div className="h-artist-stats">
                    <h5>Listeners:{track.listeners}</h5>
                    <h5>Playcount:{track.playcount}</h5>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
