import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddPlazaModal = ({ show, handleClose, handleAdd }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [remi, setRemi] = useState("");
  const [opnAmt, setOpnAmt] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [contAmt, setContAmt] = useState("");
  const [plazaType, setPlazaType] = useState("");

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    // Check if any required field is empty
    if (
      !name ||
      !address ||
      !remi ||
      !opnAmt ||
      !validFrom ||
      !validTo ||
      !plazaType
    ) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [name, address, remi, opnAmt, validFrom, validTo, plazaType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({
      name: name,
      addr: address,
      opn: opnAmt,
      remi: remi,
      valid_from: validFrom,
      valid_to: validTo,
      uid: "",
      type: plazaType,
      contract: contAmt,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Plaza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            //   controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Plaza Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Valid From</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setValidFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Valid To</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setValidTo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Remitance</Form.Label>
            <Form.Control
              type="text"
              placeholder="Remitance"
              onChange={(e) => setRemi(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Opening Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Opening Amount"
              onChange={(e) => setOpnAmt(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contract Amount</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Contract Amount"
              value={remi ? remi * 365 : 0}
              onChange={(e) => setContAmt(e.target.value)}
            />
          </Form.Group>
          <FloatingLabel className="mb-3" controlId="floatingSelect">
            <Form.Label>Plaza Type</Form.Label>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={(e) => setPlazaType(e.target.value)}
            >
              <option value="1">Regular Plaza</option>
              <option value="2">Limited Plaza</option>
            </select>
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPlazaModal;
