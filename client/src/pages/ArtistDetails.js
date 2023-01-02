import React, { Component } from "react";
import "./artistdetails.css";
import "../server.js";
import { showArtistTracks } from "../server.js";
import { showArtistAlbums } from "../server.js";
import { showArtist } from "../server.js";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.match.params.name;
    this.state = {
      artistTracks: [],
      artistAlbums: [],
      artists: [],
    };
  }
  componentDidMount() {
    showArtistTracks(this.name).then((artist) => {
      console.log(artist);
      this.setState({
        artistTracks: artist.toptracks.track,
      });
    });

    showArtistAlbums(this.name).then((artist) => {
      console.log(artist);
      this.setState({
        artistAlbums: artist.topalbums.album,
      });
    });

    showArtist(this.name).then((artist) => {
      console.log(artist);
      this.setState({
        artists: artist.topalbums.album,
      });
    });
  }

  render() {
    const artistTracks = this.state.artistTracks;
    const artistAlbums = this.state.artistAlbums;
    const artists = this.state.artists;

    return (
      <div className="artist-detailspage">
        {artists.map((artist) => {
          return (
            <div className="artist-card-info">
              <div className="artist-card-info-img">
                <img src={artist.image[1]["#text"]} alt="Artist Page" />
              </div>
              <h2>{artist.artist.name}</h2>
            </div>
          );
        })}

        <div className="container">
          <div className="column">
            <div className="text">Top Albums</div>
            <div className="artists-wrapper">
              <div className="artists-section">
                {artistAlbums.map((album) => {
                  return (
                    <div className="artist">
                      <a
                        key={album.name}
                        className={"artist-card"}
                        rel="noreferrer"
                        href={album.url}
                        target={"_blank"}
                      >
                        <div className="artist-card-left">
                          <div className="img">
                            <img
                              src={album.image[1]["#text"]}
                              alt="Artist Page"
                            />
                          </div>
                          <div>
                            <h2>{album.name}</h2>
                            <h5>{album.artist.name}</h5>
                          </div>
                          <div className="artist-stats">
                            <h5>{album.playcount} play</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text">Top track</div>
            <div className="artists-wrapper">
              <div className="artists-section">
                {artistTracks.map((track) => {
                  return (
                    <div className="artist">
                      <a
                        key={track.name}
                        className={"artist-card"}
                        rel="noreferrer"
                        href={track.url}
                        target={"_blank"}
                      >
                        <div className="artist-card-left">
                          <div className="img">
                            <img
                              src={track.image[1]["#text"]}
                              alt="Artist Page"
                            />
                          </div>
                          <div>
                            <h2>{track.name}</h2>
                            <h5>{track.artist.name}</h5>
                          </div>

                          <div className="artist-stats">
                            <h5>{track.playcount} play</h5>
                            <h5>{track.listeners} listeners</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetails;
