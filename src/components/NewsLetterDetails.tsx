import { Paper, Typography, Divider, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { useNewsLetterDetails } from "./hooks/useNewsLetterDetails";

export const NewsLetterDetails = () => {
  const { data: newsLetter, user } = useNewsLetterDetails();

  return (
    <>
      <Box sx={{ m: 3 }}>
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {newsLetter?.title?.toLocaleUpperCase()}
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            {newsLetter.body}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Infos de base */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                Auteur : {user?.name || "Inconnu"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                Publié le{" "}
                {formatDate(
                  newsLetter?.creationDate?.toISOString() ||
                    new Date().toISOString()
                )}
              </Typography>
            </Box>
          </Box>

          {/* Section Auteur complète */}
          {user && (
            <>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Informations sur l’auteur
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2">
                  <strong>Nom complet :</strong> {user.name}
                </Typography>
                <Typography variant="body2">
                  <strong>Nom d'utilisateur :</strong> {user.username}
                </Typography>
                <Typography variant="body2">
                  <EmailIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {user.email}
                </Typography>
                <Typography variant="body2">
                  <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {user.phone}
                </Typography>
                <Typography variant="body2">
                  <LanguageIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {user.website}
                </Typography>
                <Typography variant="body2">
                  <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {user.address.suite}, {user.address.street}, {user.address.city} ({user.address.zipcode})
                </Typography>
                <Typography variant="body2">
                  <BusinessIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {user.company.name} – "{user.company.catchPhrase}"
                </Typography>
              </Box>
            </>
          )}
        </Paper>
      </Box>
    </>
  );
};

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
