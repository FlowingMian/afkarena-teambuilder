import React from 'react';
import { Composition } from '../../model/compositions';
import {Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, Button, useDisclosure, Icon } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Role } from '../../model/characteristics/characteristics';
import CompositionBoxList from './CompositionBoxList';
import { FiEye } from 'react-icons/fi';

type CompositionBoxListModalProps = {
  compositions: Map<Composition, Role>|Array<Composition>;
  buttonLabel?:React.ReactNode
};

function CompositionBoxListModal({ compositions, buttonLabel }: CompositionBoxListModalProps):JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const array = compositions instanceof Map ? Array.from(compositions.keys()) : compositions;

  return (<>
    <Button variant='ghost' size="sm" px={0} rightIcon={array.length > 0 ? <Icon as={FiEye}/> : undefined} onClick={array.length > 0 ? onOpen : undefined}>{buttonLabel}</Button>
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
  </>);
}

export default CompositionBoxListModal;
