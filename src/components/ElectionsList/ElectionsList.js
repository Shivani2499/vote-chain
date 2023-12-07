// import React,{ useEffect } from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// const elections = [
//   { id: 1, name: "Election A" },
//   { id: 2, name: "Election B" },
//   { id: 3, name: "Election C" },
//   // Add more elections as needed
// ];

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(5),
//   },
//   header: {
//     marginBottom: theme.spacing(3),
//   },
//   button: {
//     margin: theme.spacing(2),
//   },
// }));

// function ElectionsList({ selectedElection, handleElectionSelect }) {
//   useEffect(() => {
//     // Reset selectedElection when component unmounts
//     return () => {
//       handleElectionSelect(null);
//     };
//   }, [handleElectionSelect]);
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>
//       <Typography variant="h4" align="center" className={classes.header}>
//         Select an Election
//       </Typography>
//       {elections.map((election) => (
//         <Button
//           key={election.id}
//           variant="contained"
//           color={selectedElection && selectedElection.includes(election.id) ? "primary" : "default"}
//           className={classes.button}
//           onClick={() => handleElectionSelect(election.id)}
//           component={Link}
//           to="/candidates"
//         >
//           {election.name}
//         </Button>
//       ))}
//     </Container>
//   );
// }

// export default ElectionsList;
// 6:51


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

// const elections = [
//   { id: 1, name: "Election A" },
//   { id: 2, name: "Election B" },
//   { id: 3, name: "Election C" },
//   // Add more elections as needed
// ];

// const useStyles = makeStyles((theme) => ({
//   outerCard: {
//     padding: theme.spacing(3),
//     margin: theme.spacing(3),
//   },
//   container: {
//     marginTop: theme.spacing(3),
//   },
//   header: {
//     marginBottom: theme.spacing(3),
//   },
//   card: {
//     marginBottom: theme.spacing(2),
//     border: "1px solid black",
//   },
//   cardContent: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(2),
//   },
//   button: {
//     width: "100%", // Adjust button width to fill the card content
//   },
// }));

// function ElectionsList({ selectedElection, handleElectionSelect }) {
//   useEffect(() => {
//     // Reset selectedElection when component unmounts
//     return () => {
//       handleElectionSelect(null);
//     };
//   }, [handleElectionSelect]);
//   const classes = useStyles();

//   return (
//     <>
//     <Navbar />
//     <Card className={classes.outerCard}>
//       <Typography variant="h4" align="center" className={classes.header}>
//         Select an Election
//       </Typography>
//       <Container className={classes.container}>
//         {elections.map((election) => (
//           <Card key={election.id} className={classes.card}>
//             <CardContent className={classes.cardContent}>
//               <Button
//                 variant="contained"
//                 color={selectedElection && selectedElection.includes(election.id) ? "primary" : "default"}
//                 onClick={() => handleElectionSelect(election.id)}
//                 component={Link}
//                 to={`/candidates/${election.id}`}
//                 className={classes.button}
//               >
//                 {election.name}
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </Container>
//     </Card>
//     <Footer />
//     </>
//   );
// }

// export default ElectionsList;

//9:35pm - 3/12
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Navbar from "../Navbars/DemoNavbar";
import Footer from "../Footers/SimpleFooter";
import CardFooter from "../Footers/CardsFooter";

const elections = [
  { id: 1, name: "Election A" },
  { id: 2, name: "Election B" },
  { id: 3, name: "Election C" },
  // Add more elections as needed
];

const useStyles = makeStyles((theme) => ({
  outerCard: {
    padding: theme.spacing(10),
    margin: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  card: {
    marginBottom: theme.spacing(2),
    border: "1px solid black",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  button: {
    width: "100%", // Adjust button width to fill the card content
  },
}));

function ElectionsList({ selectedElection, handleElectionSelect }) {
  useEffect(() => {
    // Reset selectedElection when component unmounts
    return () => {
      handleElectionSelect(null);
    };
  }, [handleElectionSelect]);
  const classes = useStyles();

  return (
    <div>
      <div style={{ padding: 50 }} >
        <Navbar />
      </div>
      <Container className="classes.usestyles">
        <div className="wrapper">
          <Card className={classes.outerCard}>
            <Typography variant="h4" align="center" className={classes.header}>
              Select an election
            </Typography>
            
            <Container className={classes.container}>
              {elections.map((election) => (
                <Card key={election.id} className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Button
                      variant="contained"
                      color={
                        selectedElection && selectedElection.includes(election.id)
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleElectionSelect(election.id)}
                      component={Link}
                      to={`/candidates/${election.id}`}
                      className={classes.button}
                    >
                      {election.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {/* <div className="btn-wrapper">
                <Button
                  className="btn-simple"
                  color="primary"
                  type="button"
                  href="#pablo">
                  <i className="tim-icons icon-bulb-63" style={{backgroundColor: "#171941"}}/> Track
                </Button>
              </div> */}
            </Container>

          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default ElectionsList;