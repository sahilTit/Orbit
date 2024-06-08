import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const EditPlazaModal = ({ show, handleClose, plaza }) => {
  const [name, setName] = useState(plaza && plaza.name);
  const [address, setAddress] = useState(plaza ? plaza.addr : "");
  const [remi, setRemi] = useState(plaza ? plaza.remi : "");
  const [opnAmt, setOpnAmt] = useState(plaza ? plaza.opn_amt : "");
  const [validFrom, setValidFrom] = useState(plaza ? plaza.valid_from : "");
  const [validTo, setValidTo] = useState(plaza ? plaza.valid_to : "");
  const [plazaType, setPlazaType] = useState(plaza ? plaza.type : "");

  const [contract, setCont] = useState(plaza ? plaza.contract : "");
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/updplaza",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            addr: address,
            remi: remi,
            uid: "",
            opn: opnAmt,
            valid_from: validFrom,
            valid_to: validTo,
            type: plazaType,
            contract: contract,
            plaza_id: plaza.plaza_id,
          }),
        }
      );
      if (response.ok) {
        // Handle success
        handleClose();
      } else {
        console.log("Error Editing Plaza");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!show) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Plaza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Plaza Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              defaultValue={plaza.name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              defaultValue={plaza.addr}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Valid From</Form.Label>
            <Form.Control
              type="date"
              defaultValue={plaza.valid_from}
              onChange={(e) => setValidFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Valid To</Form.Label>
            <Form.Control
              type="date"
              defaultValue={plaza.valid_to}
              onChange={(e) => setValidTo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Remitance</Form.Label>
            <Form.Control
              type="text"
              placeholder="Remitance"
              defaultValue={plaza.remi}
              onChange={(e) => setRemi(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Opening Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Opening Amount"
              defaultValue={plaza.opn_amt}
              onChange={(e) => setOpnAmt(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contract Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contract Amount"
              defaultValue={plaza.contract}
              onChange={(e) => setCont(e.target.value)}
            />
          </Form.Group>
          <FloatingLabel className="mb-3" controlId="floatingSelect">
            <Form.Label>Plaza Type</Form.Label>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              defaultValue={plazaType}
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
        <Button variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPlazaModal;
