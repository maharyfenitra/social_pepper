import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useProfile } from "./hooks/useProfile";

export const Profile = () => {
  const { user } = useProfile();

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Avatar sx={{ width: 80, height: 80 }}>
            {user.name[0].toUpperCase()}
          </Avatar>

          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.job}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Membre depuis : {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Paramètres du compte
        </Typography>

        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Changer l'email"
            defaultValue={user.email}
          />
          <TextField fullWidth label="Nouveau mot de passe" type="password" />
          <TextField
            fullWidth
            label="Confirmer le mot de passe"
            type="password"
          />
          <Button variant="contained" color="primary">
            Enregistrer les modifications
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
