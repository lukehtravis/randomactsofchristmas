import Header from "./header";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "../App.css";
import gnomes from "../santaGnomes.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.darkGreen,
  },
  container: {
    color: theme.palette.primary.lightRed,
  },
  imageContainer: {
    height: "600px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    background: `url(${gnomes}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "600px",
  },
  textContainer: {
    margin: "0 auto",
    color: "#F8B229",
    fontFamily: "Emilys Candy",
    fontSize: "26px",
    letterSpacing: "1px",
    padding: "50px",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  link: {
    color: theme.palette.primary.lightRed,
    padding: "0px 8px",
  },
}));

function Mission() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header isTransparent={false} />
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <div className={classes.image} />
        </div>
        <div className={classes.textContainer}>
          <h2>WTF Is Random Acts Of Christmas?</h2>

          <p>
            The idea is simple. Go out and bring the Christmas cheer to a public
            place near you.
          </p>
          <p>
            Maybe you put some ornaments or tinsel on a tree near your house, or
            set up a fake fireplace in the middle of the sidewalk, or build a
            snowman out of cotton balls and put it in a park, or draw some
            Christmas trees in chalk on your sidewalk, or maybe you put up a
            Christmas tree in a nearby park, or hang some wreaths or put a Santa
            Hat on a local statue (putting a santa hat on anything counts as a
            Random Act Of Christmas), or maybe you'd like to put up an epic
            light display somewhere, or random presents under a random tree, or
            put a single small star up somwhere (even tiny acts of christmas are
            acts of christmas), or anything you can think of, basically.
          </p>

          <p>
            Then, once you have brought that cheer, and the world is afire with
            your act of goodwill, you make it public via the following steps:
          </p>
          <ol>
            <li>
              Go to google maps, and drop a pin on the exact place where your
              Random Act Of Christmas took place
            </li>
            <li>
              Get the coordinates of the pin (first coordinate is latitude,
              second is longitude (ex, 37.866197, -122.284623)
            </li>
            <li>
              Add the lat and long to our
              <a
                className={classes.link}
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1skJYfeya6QrZUZcUF0Vm0AvuyVlDxyNNTnvtbcCBSSU/edit?usp=sharing"
              >
                Acts Of Christmas Spreadsheet
              </a>
              (lol, seriously though)
            </li>
            <li>
              Visit the Map Of Acts Of Christmas page (in menu) to see your
              brilliance, and the brilliance of others
            </li>
          </ol>

          <p>
            But you don't need to create an Act Of Christmas yourself to add
            something to the map. If you happen to notice someone elses heroic
            Act Of Christmas on your daily rounds, some amazing light display on
            a house, two doves kissig in a park, an angel blowing a trumpet in
            the sky, or some salvation army santa ringing his bell with special
            gusto...put it on the map. Tell everyone about these signs of
            wonder, and help Christmas send it extra hard this year.
          </p>

          <h2>But...Why?</h2>
          <p>
            Excellent question. Basically, it's been a tough year, and finding
            reasons to come together as a communty is just slightly harder when
            human contact is limited, or outright forbidden, and this is just
            one small attempt at grabbing the holiday by the horns (or antlers),
            to use Christmas, and all its' absurd traditions, as an excuse to
            perform random acts of beautification, celebration, and public
            goodwill, in the hopes that it will make our communities a little
            brighter, bring us closer together, and light that holiday fire in
            our hearts.
          </p>
          <p>Believe in the magic!</p>
          <p>BELIEVE IN IT!</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
