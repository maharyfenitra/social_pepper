import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

export const Support = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !subject || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    alert(
      "Message envoyé, l'équipe repondra a votre demande d'ici peut de temps!"
    );

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Centre de support
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Une question ? Un problème ? N’hésitez pas à nous contacter. Nous vous
          répondrons dès que possible.
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Adresse email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Sujet"
            fullWidth
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <TextField
            label="Message"
            fullWidth
            required
            multiline
            minRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Envoyer le message
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
