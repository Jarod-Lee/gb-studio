import React, { Component } from "react";
import { connect } from "react-redux";
import {
  EVENT_CAMERA_MOVE_TO,
  EVENT_ACTOR_MOVE_TO,
  EVENT_ACTOR_SET_POSITION
} from "../../lib/compiler/eventTypes";

const TILE_SIZE = 8;

class EventHelper extends Component {
  render() {
    const { event, scene } = this.props;

    return (
      <div className="EventHelper">
        {event.command === EVENT_CAMERA_MOVE_TO ? (
          <div
            className="EventHelper__CameraPos"
            style={{
              left: (event.args.x || 0) * TILE_SIZE,
              top: (event.args.y || 0) * TILE_SIZE
            }}
          />
        ) : event.command === EVENT_ACTOR_MOVE_TO ||
          event.command === EVENT_ACTOR_SET_POSITION ? (
          <div
            className="EventHelper__PosMarker"
            style={{
              left: (event.args.x || 0) * TILE_SIZE,
              top: (event.args.y || 0) * TILE_SIZE
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default EventHelper;