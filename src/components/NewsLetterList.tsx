import Grid from "@mui/joy/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NewsLetterPanel } from "./NewsLetterPanel";
import { useNewsLetterList } from "./hooks/useNewsLetterList";
import { Box } from "@mui/material";

export const NewsLetterList = () => {
  const { data, filter, setFilter, navigate } = useNewsLetterList();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            name="title"
            label="Filtrer par titre"
            variant="standard"
            value={filter.title}
            onChange={handleChange}
            size="small"
          />
          <TextField
            name="body"
            label="Filtrer par contenu"
            variant="standard"
            value={filter.body}
            onChange={handleChange}
            size="small"
          />
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {(data || []).map((news, index) => (
          <Grid xs={12} md={6} lg={4} key={index}>
            <NewsLetterPanel newsLetter={news} />
            <Stack spacing={1} direction="row" sx={{ mt: 1 }}>
              <Button variant="contained" onClick={() => navigate(`/news-letter-details/${news.id}`)}>Details</Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
