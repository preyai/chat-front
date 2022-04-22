import { Drawer, Container } from "@mui/material";
import { useAuthContext } from "./hooks/useAuth";
import Header from "./components/Header";

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <Container>
        <Header />
        <Drawer
          sx={{
            width: 200
          }}
          variant="permanent"
        >
          {user &&
            user.nickname}
        </Drawer>
      </Container>
    </div>
  );
}

export default App;
