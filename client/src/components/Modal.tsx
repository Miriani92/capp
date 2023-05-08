import React from "react";
import { useStore } from "../store/useUsersStore";
import { ButtonWrapper } from "./Modal.styled";
import { Button, Modal } from "antd";
import { UserForm } from "./Form";
export type FormProps = {
  id?: number;
  name?: string;
  email?: string;
  city?: string;
  street?: string;
  gender?: string;
  phone?: string;
  handleSubmit?: (user: any) => void;
};
export const FormModal: React.FC<FormProps> = (props) => {
  const { isModalOpen, toggleModal, isAddModalOpen, toggleAddModal, editUser } =
    useStore((state) => state);

  const showModal = () => {
    toggleModal(true);
  };

  const handleOk = () => {
    toggleModal(false);
    toggleAddModal(false);
  };

  const handleCancel = () => {
    toggleModal(false);
    toggleAddModal(false);
  };
  return (
    <>
      <ButtonWrapper>
        <Button type="primary" size="large" onClick={showModal}>
          Add User
        </Button>
      </ButtonWrapper>
      <Modal
        title={isAddModalOpen ? "Edit Modal" : "Form Modal"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isAddModalOpen ? (
          <UserForm {...props} handleSubmit={editUser} />
        ) : (
          <UserForm />
        )}
      </Modal>
    </>
  );
};
