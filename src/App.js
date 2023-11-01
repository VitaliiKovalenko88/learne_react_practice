import Panel from './components/Panel';
import Profile from './components/Profile';


function App() {
  return (
    <div>
    <Panel title="User profile">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>

  </div>
  );
}

export default App;
