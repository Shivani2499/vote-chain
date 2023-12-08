import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { POST_TRANSACTION, FETCH_TRANSACTION } from "../utils/ResDbApis"; // Import the POST_TRANSACTION API
import { sendRequest } from "../utils/ResDbClient"; // Import the sendRequest function
import { app, auth } from '../../firebase';
import { useParams } from "react-router-dom";
import Navbar from "../Navbars/DemoNavbar";
import Footer from "../Footers/SimpleFooter";

// Inside your CandidatesList component


const sampleCandidates = [
  { id: "1", name: "Candidate 1" },
  { id: "2", name: "Candidate 2" },
  { id: "3", name: "Candidate 3" },
];

const elections = [
  { id: 1, name: "Election A" },
  { id: 2, name: "Election B" },
  { id: 3, name: "Election C" },
];

const CandidatesList = ({ selectedElection, votedCandidates, handleVote, isElectionVoted }) => {
  const [isVotingDisabled, setVotingDisabled] = useState(false);
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const { electionId } = useParams();
  console.log("Election ID from URL:", electionId);
  useEffect(() => {
    if (selectedElection) {
      // Fetch transactions for the selected election
      fetchTransactions(selectedElection.id);
    }
  }, [selectedElection]);

  const fetchTransactions = async (electionId) => {
    try {
      // Fetch transactions using the FETCH_TRANSACTION API
      const res = await sendRequest(FETCH_TRANSACTION("5qkZEPYKbJCDVzQ4BiWx3RZyZ2NvSNXJ7SnzdyZ9GBXB", "5qkZEPYKbJCDVzQ4BiWx3RZyZ2NvSNXJ7SnzdyZ9GBXB"));
      if (!selectedElection) {
        console.error("Selected election is null or undefined");
        return;
      }
      console.log("Fetch Transactions Response:", res); // Log the response
      
      if (res && res.data && res.data.getFilteredTransactions) {
        // Process the transaction data as needed
        setTransactions(res.data.getFilteredTransactions);
        console.log("Fetched Transactions:", res.data.getFilteredTransactions); // Log the fetched transactions
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      // Handle error scenarios here
    }
  };

  const handleCandidateVote = async (candidateId) => {
    console.log("Voting for candidate:", candidateId);
    if (!candidateId) {
      console.error("Candidate ID is null or undefined");
      return;
    }
    if (isElectionVoted) {
      setVotedCandidate(null);
      setVotingDisabled(true);
    } else {
      try {
        const user = auth.currentUser;

        // Ensure the user is authenticated
        if (!user) {
          console.error("User not authenticated.");
          // Handle authentication error
          return;
        }
  

        const metadata = {
          signerPublicKey: "B8GFzNi6vfVhA9crXSC2S8s9K2eoNJd1HhwEbCLwT6gC",
          signerPrivateKey: "5xFSv5y3HYJv5YSNJ78cSS7Tuaf38Lu6UYj2ajngFuwH",
          recipientPublicKey: "B8GFzNi6vfVhA9crXSC2S8s9K2eoNJd1HhwEbCLwT6gC", // Change this according to your requirement
        };

        // Create a data object for the transaction
        const dataItem = { // Add the candidate ID or any necessary data
          // Add other necessary data properties here
          electionId: electionId,
          candidateId: candidateId,
          voterId: user.uid, // Replace with the actual voter ID
          voteCount: 1, // Initial vote count
          additionalData: {
            timestamp: Date.now(),
            location: "Precinct 123", // Replace with actual location data
            verificationCode: "ABCDEF", // Replace with actual verification code
          },
        };

        // Call the API to post the transaction
        const res = await sendRequest(POST_TRANSACTION(metadata, JSON.stringify(dataItem)));

        console.log("Transaction response:", res);

        // Update the state to reflect the successful vote
        setVotedCandidate(candidateId);
        setVotingDisabled(true);
      } catch (error) {
        console.error("Error while voting:", error);
        // Handle error scenarios here
      }
    }
  };

 

  return (
    <div>
      <Navbar></Navbar>
      <Typography variant="h4" style={{ color: "#FFFFFF",  marginTop: 100}}>Candidates List</Typography>
      {selectedElection && (
        <Typography variant="h5">Election: {selectedElection.name}</Typography>
      )}
      {isElectionVoted && (
        <Typography variant="h6">You have already voted in this election.</Typography>
      )}

      {sampleCandidates.map((candidate) => (
        <Card key={candidate.id} style={{ marginTop: 20}}>
          <CardContent>
            <Typography variant="h6">{candidate.name}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CheckIcon />}
              onClick={() => handleCandidateVote(candidate.id)}
              
              
              disabled={isVotingDisabled}
            >
              Vote
            </Button>
            {votedCandidate === candidate.id && (
              <Typography color="primary" style={{ marginTop: 10 }}>
                You have successfully voted for {candidate.name}.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
      <Footer />
    </div>
  );
};

export default CandidatesList;

