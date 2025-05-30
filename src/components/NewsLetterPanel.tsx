import { Paper, Typography, Divider, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import type { NewsLetterType } from "../lib";
import { useGetUserQuery } from "../lib";

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
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

export const NewsLetterPanel = ({
  newsLetter,
}: {
  newsLetter: NewsLetterType;
}) => {
  
  const { data } = useGetUserQuery(newsLetter.userId);

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        {truncateText(newsLetter.title, 30).toUpperCase()}
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        {truncateText(newsLetter.body, 150)}
      </Typography>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PersonIcon fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            Auteur : {data?.name || "Inconnu"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AccessTimeIcon fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            Publié le {formatDate(newsLetter.creationDate.toISOString())}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
