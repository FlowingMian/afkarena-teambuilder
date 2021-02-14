import { Composition } from "../../model/compositions";
import {Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, Button, useDisclosure } from '@chakra-ui/react'
import { Fragment } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { Role } from "../../model/characteristics";
import CompositionList from "./CompositionList";

type CompositionModalProps = {
  compositions: Map<Composition, Role> | Array<Composition>;
  label?:React.ReactNode
};

function CompositionModal({ compositions, label }: CompositionModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <Fragment>
    <Button variant='ghost' rightIcon={<ViewIcon/>} onClick={onOpen}>{label}</Button>
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Compositions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CompositionList compositions={compositions} />
        </ModalBody>
      </ModalContent>
    </Modal>
    </Fragment>;
}

export default CompositionModal;
