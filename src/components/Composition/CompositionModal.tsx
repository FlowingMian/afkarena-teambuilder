import React from 'react';
import { Composition } from '../../model/compositions';
import {Modal, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, useDisclosure, IconButton, Icon } from '@chakra-ui/react';
import { Fragment } from 'react';
import CompositionDetails from './CompositionDetails';
import { FiEye } from 'react-icons/fi';

type CompositionModalProps = {
  composition: Composition;
};

function CompositionModal({ composition }: CompositionModalProps):JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <>
    <IconButton variant='ghost' size="sm" icon={<Icon as={FiEye} />} onClick={onOpen} aria-label="View composition" />
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <CompositionDetails composition={composition} />
        </ModalBody>
      </ModalContent>
    </Modal>
  </>;
}

export default CompositionModal;
