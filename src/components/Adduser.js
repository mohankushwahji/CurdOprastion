import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { adduser } from "../components/api/Api";
import { useHistory } from "react-router-dom";

const allfield = {
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
};
export default function Adduser() {
  let history = useHistory();
  const [user, setUser] = useState(allfield);
  const handlerIinput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addpost = async (e) => {
    await adduser(user);
    history.push("/");
  };

  return (
    <div className="conatiner mt-3">
      <div className="row">
        <div className="col-md-6 m-auto">
          <FormGroup>
            <FormControl className="mt-2">
              <InputLabel>Name</InputLabel>
              <Input name="name" onChange={(e) => handlerIinput(e)} />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>User Name</InputLabel>
              <Input name="username" onChange={(e) => handlerIinput(e)} />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>Email</InputLabel>
              <Input name="email" onChange={(e) => handlerIinput(e)} />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>Address</InputLabel>
              <Input name="address" onChange={(e) => handlerIinput(e)} />
            </FormControl>
            <FormControl className="mt-2">
              <InputLabel>Phone</InputLabel>
              <Input name="phone" onChange={(e) => handlerIinput(e)} />
            </FormControl>
            <Button
              className="mt-2"
              variant="contained"
              color="primary"
              onClick={() => addpost()}
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
