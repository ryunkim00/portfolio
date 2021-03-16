import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import InterestBubble from "./shared/InterestBubble";
import UM from "../assets/UM.jpg";
import YTCover from "../assets/YT-Cover.jpeg";
import HTN from "../assets/HTN.jpg";
import Scooter from "../assets/Scooter.jpg";
import Painting from "../assets/Painting.jpeg";
import TreeFarm from "../assets/Tree-Farm.jpeg";

const Interests = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const interests = [
    {
      id: "1",
      imgSrc: UM,
      title:
        "Competing in an international collegiate a cappella competition in 2020 and placing second, qualifying for semifinals that year in Buffalo!",
      size: "24rem",
    },
    {
      id: "2",
      imgSrc: YTCover,
      title: "Making a YouTube cover with a friend",
      size: "18rem",
      delay: 1,
    },
    {
      id: "3",
      imgSrc: HTN,
      title:
        "Competing in Hack the North, North America's biggest hackathon, in 2019 with newly made friends",
      size: "20rem",
      delay: 1.5,
    },
    {
      id: "4",
      imgSrc: Scooter,
      title: "Scootering/biking around",
      size: "20rem",
      delay: 2,
    },
    {
      id: "5",
      imgSrc: Painting,
      title: "Bob Ross night!",
      size: "24rem",
      delay: 2.5,
    },
    {
      id: "6",
      imgSrc: TreeFarm,
      title:
        "Visiting a tree farm with my rommates to pick out a Christmas tree",
      size: "22rem",
      delay: 2.5,
    },
  ];

  return (
    <div
      id="Interests"
      style={{
        marginTop: "-5rem",
        paddingBottom: "5rem",
        backgroundColor: theme.bg,
        color: theme.syntax,
        backgroundImage: `url(${
          isLightTheme
            ? "https://i.imgur.com/HDQzkFs.png"
            : "https://i.imgur.com/ZSdl0aR.png"
        })`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ padding: "3rem 10vmax" }}>
        <h2>Interests</h2>
        <p style={{ marginBottom: "3rem" }}>
          Some of my hobbies include singing in a cappella groups, making
          YouTube cover videos, attending hackathons, reading, and exercising.
          I'm always open to learning and trying new things! I also love
          spending quality time with my friends and family. Click on each bubble
          to learn more.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {interests.map((interest) => (
          <InterestBubble {...interest} key={interest.id} />
        ))}
      </div>
    </div>
  );
};

export default Interests;
