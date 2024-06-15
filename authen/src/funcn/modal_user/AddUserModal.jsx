import { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { DataContext } from "../../context/DataContext";
import SearchableSelect from "../../pages/role/SearchSelectInput";

const AddUserModal = ({ show, handleClose, handleAdd }) => {
  const { data2 } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [code, setCode] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    // Check if any required field is empty
    if (!name || !email || !password || !mobile || !role || !code) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [name, email, password, mobile, role, code]);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setCode(option ? option.value : null);
  };

  let plazaOption = data2
    ? data2.map((eachData) => ({
        label: eachData.name,
        value: eachData.plaza_id,
      }))
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      role: role,
      pid: code,
      uid: "",
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <FloatingLabel className="mb-3" controlId="floatingSelect">
              <Form.Label>Select Role</Form.Label>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="1">Toll Operator</option>
                <option value="2">Accounts Reports</option>
                <option value="3">Supervisor</option>
                <option value="4">Admin</option>
              </select>
            </FloatingLabel>

            <FloatingLabel className="mb-3" controlId="floatingSelect">
              <Form.Label>Select Plaza</Form.Label>
              <SearchableSelect
                placeholder={"Select Plaza"}
                options={plazaOption}
                value={selectedOption}
                onChange={handleSelectChange}
              />
            </FloatingLabel>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onSubmit={handleSubmit}
            disabled={isSubmitDisabled}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUserModal;
