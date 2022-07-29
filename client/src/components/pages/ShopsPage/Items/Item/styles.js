import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    backgroundColor: "rgb(37, 150, 190)",
    border: "3px solid #6ad1eb",
  },
  overlay: {
    margin: "5px 10px",
  },
  overlay2: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
