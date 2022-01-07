import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewContacts from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContacts} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
