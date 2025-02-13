import { addContributor } from "@/services/contributors";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Slide,
} from "@mui/material"; // MUI components
import { stylesFunc } from "@/styles/gyft-appStyles";

interface Props {
  visible: boolean;
  onClose: () => void;
  onContributorAdded: (contributor: any) => void;
}
export default function ContributorModal({
  visible,
  onClose,
  onContributorAdded,
}: Props) {
  //id: how do we get the id from the newly created contributor from the db?
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCellPhone, setNewCellPhone] = useState("");
  const [newDeposit, setNewDeposit] = useState("");

  const handleSubmit = async () => {
    if (!newFirstName || !newLastName || !newEmail || !newCellPhone) return;

    try {
      const newContributor = await addContributor({
        user: {
          firstName: newFirstName,
          lastName: newLastName,
          email: newEmail,
          cellPhone: newCellPhone,
        },
        deposit: parseFloat(newDeposit) || 0,
        groupId: 1, // Placeholder group ID
      });

      onContributorAdded(newContributor);
      resetForm();
    } catch (error) {
      alert("Failed to add contributor. Please try again.");
    }
  };

  const resetForm = () => {
    setNewFirstName("");
    setNewLastName("");
    setNewEmail("");
    setNewCellPhone("");
    setNewDeposit("");
    onClose();
  };

  // Type the event parameter explicitly
  const handleChangeFirstName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewFirstName(e.target.value);
  };

  const handleChangeLastName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewLastName(e.target.value);
  };

  const handleChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewEmail(e.target.value);
  };

  const handleChangeCellPhone = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewCellPhone(e.target.value);
  };

  const handleChangeDeposit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewDeposit(e.target.value);
  };

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>Add Contributor</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          value={newFirstName}
          onChange={handleChangeFirstName}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          value={newLastName}
          onChange={handleChangeLastName}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={newEmail}
          onChange={handleChangeEmail}
          fullWidth
          margin="normal"
          type="email"
        />
        <TextField
          label="Cell Phone"
          value={newCellPhone}
          onChange={handleChangeCellPhone}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Initial Deposit"
          value={newDeposit}
          onChange={handleChangeDeposit}
          fullWidth
          margin="normal"
          type="number"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={resetForm} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
