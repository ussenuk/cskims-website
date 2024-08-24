import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/jobs")
      .then((r) => r.json())
      .then(setJobs);
  }, []);

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div>
      {/* Volunteering Section */}
      <div style={{ textAlign: "center" }}>
      <Typography variant="h5">
        <strong>
          <u>TRAVAILLER AU C.S KIM'S</u>
        </strong>
      </Typography>
      <Typography variant="body1" style={{ marginTop: "16px" }}>
        Vous êtes enseignant et intéressé par du volontariat au sein de C.S KIM'S ?
      </Typography>
      <Typography variant="body1" style={{ marginTop: "8px" }}>
        Envoyez votre candidature
      </Typography>
      <Typography variant="body1" style={{ marginTop: "8px" }}>
        <strong>Condition d’éligibilité:</strong>
      </Typography>
      <ul style={{ textAlign: "left", marginLeft: "20%", marginTop: "8px" }}>
        <li>Etre titulaire d’un diplôme dans l’enseignement</li>
        <li>Fournir une lettre de recommandation d’une institution scolaire</li>
        <li>Fournir un certificat de bonne vie et mœurs</li>
        <li>Envoyer votre lettre de motivation et votre CV</li>
      </ul>
      <Typography variant="body1" style={{ marginTop: "16px" }}>
        Pour soumettre votre candidature, envoyez votre lettre de motivation et votre CV à{" "}
        <a href="mailto:ukimanuka@gmail.com" style={{ color: "blue" }}>
          <u>ukimanuka@gmail.com</u>
        </a>
      </Typography>
    </div>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5">
            <strong>
              <u>Liste de tous les emplois disponibles</u>
            </strong>
          </Typography>
        </div>

        <TableContainer component={Paper} style={{ width: "90%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Teaching Level</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Requirements</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.level}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.requirements}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br />
        
      </div>
    </section>
  );
}

export default Jobs;
