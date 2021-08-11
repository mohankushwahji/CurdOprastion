import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { editusers, getUsers } from "../components/api/Api";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

const allfield = {
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
};
export default function EditUser() {
  let { id } = useParams();
  let history = useHistory();
  const [user, setUser] = useState(allfield);
  const { name, username, email, address, phone } = user;
  const handlerIinput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await getUsers(id);
    setUser(res.data);
  };
  const editpost = async () => {
    await editusers(id, user);
    history.push("/");
  };

  return (
    <div className="conatiner mt-3">
      <div className="row">
        <div className="col-md-6 m-auto">
          <FormGroup>
            <FormControl className="mt-2">
              <InputLabel>Name</InputLabel>
              <Input
                name="name"
                value={name}
                onChange={(e) => handlerIinput(e)}
              />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>User Name</InputLabel>
              <Input
                name="username"
                value={username}
                onChange={(e) => handlerIinput(e)}
              />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>Email</InputLabel>
              <Input
                name="email"
                value={email}
                onChange={(e) => handlerIinput(e)}
              />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>Address</InputLabel>
              <Input
                name="address"
                value={address}
                onChange={(e) => handlerIinput(e)}
              />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>Phone</InputLabel>
              <Input
                name="phone"
                value={phone}
                onChange={(e) => handlerIinput(e)}
              />
            </FormControl>
            <Button
              className="mt-2"
              variant="contained"
              color="primary"
              onClick={() => editpost()}
            >
              {" "}
              Add User
            </Button>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
