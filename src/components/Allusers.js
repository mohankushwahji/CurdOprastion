import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUsers, userDelete } from "../components/api/Api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

function Allusers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllusers();
  }, []);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(user));
  }, [user]);
  const getAllusers = async () => {
    const res = await getUsers();
    setUser(res.data);
  };
  const handlerDelete = async (id) => {
    await userDelete(id);
    getAllusers();
  };
  return (
    <div>
      <TableContainer className="container mt-3">
        <Table className="table table-bordred shadow">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell className="text-center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((post, i) => (
              <TableRow key={post.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{post.name}</TableCell>
                <TableCell>{post.username}</TableCell>
                <TableCell>{post.email}</TableCell>
                <TableCell>{post.address}</TableCell>
                <TableCell>{post.phone}</TableCell>
                <TableCell style={{ display: "flex" }}>
                  <Button
                    color="primary"
                    component={Link}
                    to={`/edituser/${post.id}`}
                  >
                    {" "}
                    <EditIcon />{" "}
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handlerDelete(post.id)}
                  >
                    {" "}
                    <DeleteIcon />{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Allusers;
