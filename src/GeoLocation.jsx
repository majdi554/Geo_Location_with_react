import React from "react";
import Geolocation from "react-geolocation";

export default () => {
  return (
    <Geolocation
      onSuccess={console.log}
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) =>
        <div>
          <button className={`boder-radius: 22px; background-color: red;`}
           onClick={getCurrentPosition}>ma position</button>
          {error &&
            <div>
              {error.message}
            </div>}
          <pre>
            latitude: {latitude} 
            longitude: {longitude}
          </pre>
        </div>}
    />
  );
};
