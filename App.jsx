import React from "react";
import { Avatar } from "@zh-engineer/airorange-react";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Avatar
            name="David Darnes"
            src="https://hub.darn.es/content/images/size/w4000/2022/02/dave-penfold.jpg"
          />
          <Avatar
            name="Seth Corker"
            src="https://sethcorker.com/static/web_prof-small-5ea7bafb5e58043f7536b63497995d29.jpg"
          />
          <Avatar
            name="Rosie Watson"
            src="https://www.rosiewatson.dev/content/images/2024/07/rosie_headshot-5.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
