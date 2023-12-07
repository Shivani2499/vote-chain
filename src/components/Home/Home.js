// import React from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(5),
//   },
//   header: {
//     marginBottom: theme.spacing(3),
//   },
//   buttonContainer: {
//     marginTop: theme.spacing(2),
//   },
// }));

// function Home(props) {
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h3" align="center" className={classes.header}>
//             Welcome to the Voting Website
//           </Typography>
//         </Grid>
//         <Grid item xs={6} align="center">
//           <Link to="/login">
//             <Button variant="contained" color="primary">
//               Login
//             </Button>
//           </Link>
//         </Grid>
//         <Grid item xs={6} align="center">
//           <Link to="/signup">
//             <Button variant="contained" color="secondary">
//               Signup
//             </Button>
//           </Link>
//         </Grid>
//         <Grid item xs={12} className={classes.buttonContainer} align="center">
//           <Typography variant="h5">
//             {props.name ? `Welcome - ${props.name}` : "Login to vote"}
//           </Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Home;

//2:25am
// import React from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(8),
//   },
//   header: {
//     marginBottom: theme.spacing(3),
//   },
//   navbar: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   title: {
//     marginRight: "auto", // Pushes the title to the extreme left
//   },
// }));

// function Home(props) {
//   const classes = useStyles();

//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Voting Website
//           </Typography>
//           <div className={classes.navbar}>
//             <Button color="inherit" component={Link} to="/login">
//               Voter Login
//             </Button>
//             <Button color="inherit" component={Link} to="/signup">
//               Voter Signup
//             </Button>
//             <Button color="inherit" component={Link} to="/login">
//               Admin Login
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Container className={classes.container}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Typography variant="h3" align="center" className={classes.header}>
//               Welcome 
//             </Typography>
//           </Grid>
//           <Grid item xs={12} align="center">
//             <Typography variant="h5">
//               {props.name ? `Welcome - ${props.name}` : "Login to vote"}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Row, Col } from "reactstrap";
// import { Color } from "reactstrap";
// import {Typography} from "reactstrap";
import CardContent from "@material-ui/core/CardContent";
import Navbar from "../Navbars/DemoNavbar";
import Footer from "../Footers/SimpleFooter";
// import {
//   Button
// } from "reactstrap";


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(20)
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  // title: {
  //   marginRight: "auto", // Pushes the title to the extreme left
  // },
  card: {
    height: "100%",
    // marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(8)
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <div style={{ padding: 50 }} >
        <Navbar />
      </div>
      <div className="wrapper">
        <div className="page-header header-filter">
          <Container>
            <div className="content-center brand">
              <h4 className="d-none d-sm-block" style={{ color: "#FFFBBA" }}>
              A secure and transparent e-voting system
              </h4>
            </div>
          </Container>
        </div>
        <section className="section section-lg section-safe">
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("../../components/images/Untitled_design-removebg-preview.png")}
                />
              </Col>
              <Col md="6">
                <div className="px-md-4">
                  <hr className="line-success" />
                  <h3 style={{color:"#FFFFFF"}}>Make Your Voice Heard: Vote for Change</h3>
                  <p style={{color:"#FFFFFF"}}>
                  The "VoteChain" initiative leverages ResilientDB, a blockchain technology, to establish a secure and transparent electronic voting system. This platform emphasizes the permanence of votes, allowing each voter to cast a single vote. Candidates can voluntarily withdraw their candidacy, and voters can transition to candidates by furnishing their candidacy details. Importantly, the voting and candidacy periods will be distinct and non-overlapping.
                  <p style={{ marginTop: "3rem", color:"#FFFFFF"}}>
                    </p>
                  The foundational framework powering this system will be{" "}
                    <a href="https://resilientdb.com" style={{color:"#FCEA3D"}}>Resilient DB</a>, ensuring robustness and integrity. In addition to these core functionalities, the platform will also address specific operational requirements. Election administrators will have the capability to create multiple elections, with each election necessitating approval from a super admin. Access to election results will be restricted until the voting phase concludes, ensuring the integrity of the process.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section className="section section-lg"> */}
            {/* <AppBar position="fixed"> */}
            {/* <Toolbar>
            <h6 className={classes.title}
            color="default">
            VoteChain
            </h6>
            <div className={classes.navbar}>
            <Button color="inherit" component={Link} to="/login">
              Voter Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Voter Signup
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Admin Login
            </Button>
            </div>
            </Toolbar> */}
            {/* </AppBar> */}
          <Container className="classes.usestyles">
            {/* <Grid item xs={12}>
            <Typography variant="h3">
            {props.name ? `Welcome - ${props.name}` : "Login to vote"}
            </Typography>
            </Grid> */}
            {/* <h3 align="center" 
            color="warning">
            VoteChain
            </h3> */}
            <div style={{ padding: 30 }} >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h6 style={{ color: "#626FDF" }}>Voter Registration</h6>
                      <blockquote className="blockquote">
                        Get started on your civic journey! Register to vote and ensure your voice is counted in the upcoming elections. Your vote is your power – let's make a difference together.
                      </blockquote>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h6  style={{ color: "#626FDF" }}>Election Day Details</h6>
                      <blockquote className="blockquote">
                        Mark your calendar! Find essential information about election dates, polling locations, and voting hours. Be prepared to make your voice heard on Election Day – your participation is crucial for a thriving democracy.
                      </blockquote>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h6  style={{ color: "#626FDF" }}>Candidate Profiles and Issues
                      </h6>
                      <blockquote className="blockquote">
                      Know your candidates and their stands on key issues. Explore comprehensive profiles to make an informed decision. Your vote shapes policies and influences change. Dive into the details and vote for a future you believe in.
                      </blockquote>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Container>
        {/* </section> */}
        </div>
        <Footer />
      </div>
      );
}

      export default Home;
