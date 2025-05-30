import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Bilan from "./pages/Bilan";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, CssBaseline } from "@mui/material";
import NewsLetter from "./pages/NewsLetter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CssBaseline />
        <div style={{ minHeight: "100vh" }}>
          <Navbar />
          <Container component="main" maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/support" element={<Support />} />
              <Route path="/bilan" element={<Bilan />} />
              <Route path="/news-letter-details/:id" element={<NewsLetter />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
