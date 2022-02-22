import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react';
import { users as usersData } from '../data/users';
import { Wrapper } from './App.styles';
import Dashboard from './Dashboard';
import MainTemplate from '../components/templates/MainTemplate/MainTemplete';
import AddUser from './AddUser';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/add-user"
                element={
                  <AddUser
                    formValues={formValues}
                    handleAddUser={handleAddUser}
                    handleInputChange={handleInputChange}
                  />
                }
              />
              <Route
                path="/"
                element={<Dashboard deleteUser={deleteUser} users={users} />}
              />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
