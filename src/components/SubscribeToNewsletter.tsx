import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Stack,
  } from "@mui/material";
  import { useState } from "react";
  
  export const SubscribeToNewsletter = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleSubmit = () => {
        
      console.log("Email inscrit :", email);

      handleClose();
    };
  
    return (
      <>
        <Button variant="contained" color="success" size="small"onClick={handleOpen}>
          S'inscrire à la newsletter
        </Button>
  
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Inscription à la newsletter</DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 1, minWidth: "300px" }}>
              <TextField
                label="Adresse e-mail"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Annuler
            </Button>
            <Button onClick={handleSubmit} variant="contained">
              S'inscrire
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  