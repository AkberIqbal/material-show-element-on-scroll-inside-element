import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

export default function HideAppBar(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    document
      .getElementById("insideDiv")
      .addEventListener("scroll", handleScroll);
  });

  const handleScroll = event => {
    const newScrollPosition = event.target.scrollTop;
    setScrollPosition(newScrollPosition);
    if (scrollPosition && scrollPosition > newScrollPosition) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  };

  return (
    <React.Fragment>
      <div style={{ height: "100px", width: "100px", overflow: "auto" }}>
        {" "}
        External content
      </div>
      <CssBaseline />
      showBar? {showBar.toString()}
      <div
        id="insideDiv"
        style={{ height: "400px", width: "300px", overflow: "auto" }}
      >
        <AppBar
          style={
            showBar
              ? {
                  position: "absolute",
                  top: "120px",
                  width: "280px",
                  left: "0"
                }
              : { position: "inherit" }
          }
        >
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>

        <Toolbar />
        <Container>
          <Box my={2}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Container>
      </div>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur e Cras mattis consectetur purus sit amet fermentum. Cras
      justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
      porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
      magna, vel scelerisque nisl consectetur e Cras mattis consectetur purus
      sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
      quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur e Cras
      mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
      consectetur e
    </React.Fragment>
  );
}
