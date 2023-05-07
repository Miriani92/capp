import React, { useState } from "react";
import { ButtonWrapper } from "./Modal.styled";
import { Button, Modal } from "antd";
import { UserForm } from "./Form";

export const FormModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonWrapper>
        <Button type="primary" size="large" onClick={showModal}>
          Add User
        </Button>
      </ButtonWrapper>
      <Modal
        title="Form Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <UserForm />
      </Modal>
    </>
  );
};
