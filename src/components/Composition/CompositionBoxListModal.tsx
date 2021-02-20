import { Composition } from "../../model/compositions";
import {Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, Button, useDisclosure } from '@chakra-ui/react'
import { Fragment } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { Role } from "../../model/characteristics";
import CompositionBoxList from "./CompositionBoxList";

type CompositionBoxListModalProps = {
  compositions: Map<Composition, Role> | Array<Composition>;
  buttonLabel?:React.ReactNode
};

function CompositionBoxListModal({ compositions, buttonLabel }: CompositionBoxListModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <Fragment>
    <Button variant='ghost' size="sm" px={0} rightIcon={<ViewIcon/>} onClick={onOpen}>{buttonLabel}</Button>
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Compositions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CompositionBoxList compositions={compositions} />
        </ModalBody>
      </ModalContent>
    </Modal>
    </Fragment>;
}

export default CompositionBoxListModal;
