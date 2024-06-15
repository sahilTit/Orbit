import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

const EditUserModal = ({ show, handleClose, plaza }) => {
  const { data2 } = useContext(DataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [pid, setPid] = useState("");
  const [active, setActive] = useState("");
  const [plazaName, setPlazaName] = useState("");
  const [password, setPassword] = useState("");
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    if (plaza) {
      setName(plaza.name);
      setEmail(plaza.email);
      setMobile(plaza.mobile);
      setRole(plaza.role_id);
      setPid(plaza.plaza_id);
      setActive(plaza.active);
      setPlazaName(plaza.plaza);
      setRoleName(plaza.roll_name);
    }
  }, [plaza]);
  console.log(plaza);
  console.log(plazaName);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/manage_user/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            mobile: mobile,
            role: role,
            pid: pid,
            getid: plaza.id,
            active: active,
            password: password,
          }),
        }
      );
      console.log(response);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEdit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Edit Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobile">
            <Form.Label>Edit Mobile Number</Form.Label>
            <Form.Control
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Edit Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Group>

          <FloatingLabel className="mb-3" controlId="floatingSelectRole">
            <Form.Label>Select Role</Form.Label>
            <Form.Select
              className="custom-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value={role}>{roleName}</option>
              <option value="1">Toll Operator</option>
              <option value="2">Accounts Reports</option>
              <option value="3">Supervisor</option>
              <option value="4">Admin</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingSelectPlaza">
            <Form.Label>Select Plaza</Form.Label>
            <Form.Select
              className="custom-select"
              defaultValue={pid}
              onChange={(e) => setPid(e.target.value)}
            >
              <option value={pid}>{plazaName}</option>
              {data2 &&
                data2.map((eachData) => (
                  <option key={eachData.id} value={eachData.plaza_id}>
                    {eachData.name}
                  </option>
                ))}
              <option value="all">All plaza</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingSelectStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={active}
              className="custom-select"
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="0">Active</option>
              <option value="1">Inactive</option>
            </Form.Select>
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
