import React from "react";
import { EventFields } from "../../lib/data/compiler/eventTypes";
import MapSelect from "../../containers/forms/MapSelect";
import FlagSelect from "../../containers/forms/FlagSelect";
import DirectionPicker from "../DirectionPicker";
import FadeSpeedSelect from "../FadeSpeedSelect";
import CameraSpeedSelect from "../CameraSpeedSelect";
import ActorSelect from "../ActorSelect";
import EmotionSelect from "../EmotionSelect";

const ScriptEventBlock = ({ command, value = {}, onChange }) => {
  const fields = EventFields[command] || [];
  const onChangeField = (key, type = "text", updateFn) => e => {
    let value = e.currentTarget ? e.currentTarget.value : e;
    if (type === "number") {
      value = parseInt(value, 10);
    }
    if (updateFn) {
      value = updateFn(value);
    }
    return onChange({
      [key]: value
    });
  };
  return (
    <div className="ScriptEventBlock">
      {fields.map(field => {
        return (
          <div
            className="ScriptEventBlock__Field"
            key={field.key}
            style={Object.assign(
              {},
              field.width && {
                width: field.width
              }
            )}
          >
            {field.label && <label>{field.label}</label>}
            {field.type === "textarea" ? (
              <textarea
                value={value[field.key]}
                rows={field.rows}
                onChange={onChangeField(field.key, "text", field.updateFn)}
              />
            ) : field.type === "text" ? (
              <input
                type="text"
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "number" ? (
              <input
                type="number"
                value={value[field.key]}
                min={field.min}
                max={field.max}
                step={field.step}
                onChange={onChangeField(field.key, field.type)}
              />
            ) : field.type === "scene" ? (
              <MapSelect
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "flag" ? (
              <FlagSelect
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "direction" ? (
              <DirectionPicker
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "fadeSpeed" ? (
              <FadeSpeedSelect
                defaultValue="2"
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "cameraSpeed" ? (
              <CameraSpeedSelect
                allowNone
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "actor" ? (
              <ActorSelect
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : field.type === "emotion" ? (
              <EmotionSelect
                value={value[field.key]}
                onChange={onChangeField(field.key)}
              />
            ) : (
              <div />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScriptEventBlock;