import TextContent from "./TextContent";

function Gallery() {
  return (
    <div className="gallery">
      <TextContent>
        {" "}
        Ultricies arcu bibendum bitae congue proin sit aliquam, felis venenatis{" "}
      </TextContent>
      <div className="gallery-items">
        <div className="items-row1">
          <img
            src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_lP5MCM6nZ5A.jpg?raw=true"
            alt="tacos"
          />
          <img
            src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_SqYmTDQYMjo.jpg?raw=true"
            alt="sandwich1"
          />
        </div>
        <div className="items-row2">
          <img
            src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_mAQZ3X_8_l0.jpg?raw=true"
            alt="sandwich2"
          />
          <img
            src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_q54Oxq44MZs.jpg?raw=true"
            alt="donut"
          />
          <img
            src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_CbNAuxSZTFo.jpg?raw=true"
            alt="pizza"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
