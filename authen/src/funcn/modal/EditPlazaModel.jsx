import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const EditPlazaModal = ({ show, handleClose, plaza }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [remi, setRemi] = useState("");
  const [opnAmt, setOpnAmt] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [plazaType, setPlazaType] = useState("");
  const [contract, setCont] = useState("");

  useEffect(() => {
    if (plaza) {
      setName(plaza.name);
      setAddress(plaza.addr);
      setRemi(plaza.remitance);
      setOpnAmt(plaza.opn_amt);
      setValidFrom(plaza.valid_from);
      setValidTo(plaza.valid_to);
      setPlazaType(plaza.ptype);
      setCont(plaza.contract);
    }
  }, [plaza]);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Valid From</Form.Label>
            <Form.Control
              type="date"
              value={validFrom}
              onChange={(e) => setValidFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Valid To</Form.Label>
            <Form.Control
              type="date"
              value={validTo}
              onChange={(e) => setValidTo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Remitance</Form.Label>
            <Form.Control
              type="text"
              placeholder="Remitance"
              value={remi}
              onChange={(e) => setRemi(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Opening Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Opening Amount"
              value={opnAmt}
              onChange={(e) => setOpnAmt(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contract Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contract Amount"
              value={contract}
              onChange={(e) => setCont(e.target.value)}
            />
          </Form.Group>
          <FloatingLabel className="mb-3" controlId="floatingSelect">
            <Form.Label>Plaza Type</Form.Label>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={plazaType}
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
