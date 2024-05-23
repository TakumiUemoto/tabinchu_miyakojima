'use client';

import { PageLinkList } from '@/lib/constant';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Link } from '@chakra-ui/layout';
import {
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Box,
  Divider,
} from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const path = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Flex
        align='center'
        justify='space-between'
        position='fixed'
        top='0'
        w='full'
        h={{ base: '60px', md: '80px' }}
        p='0 1rem 0 1rem'
        zIndex={100}
        bg='rgba(200, 200, 200, 0.85)'
      >
        <Link as={NextLink} href='/'>
          <ExportedImage
            src='logo/skeleton.webp'
            alt='logo_skeleton'
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
        </Link>

        <Flex
          display={{ base: 'none', lg: 'flex' }}
          justify='space-between'
          gap='1rem'
          w='auto'
        >
          {PageLinkList.map((link, i) => {
            return (
              <Flex
                key={`${link.path}-${i}`}
                align='center'
                gap={{ base: '0.5rem', md: '1rem' }}
              >
                <Link
                  as={NextLink}
                  fontSize={path === link.path ? '1.25rem' : '1rem'}
                  fontWeight='bold'
                  color={path === link.path ? '#000' : 'gray.500'}
                  href={link.path}
                >
                  {link.text}
                </Link>
                {i + 1 !== PageLinkList.length && <Text>/</Text>}
              </Flex>
            );
          })}
        </Flex>

        <Flex align='center' gap='1rem'>
          <Link as={NextLink} href={process.env.NEXT_PUBLIC_INSTAGRAM}>
            <ExportedImage
              src='logo/instagram.webp'
              alt='instagram'
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
          </Link>

          <HamburgerIcon
            display={{ base: 'flex', lg: 'none' }}
            width='3rem'
            height='3rem'
            onClick={onOpen}
            alignItems='center'
          />
        </Flex>
      </Flex>

      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody py='2rem'>
            <Flex justify='center' flexDir='column' textAlign='center'>
              {PageLinkList.map((link, i) => {
                return (
                  <Box key={`${link.path}-${i}`}>
                    <Link
                      as={NextLink}
                      fontWeight='bold'
                      color={path === link.path ? '#000' : 'gray.700'}
                      href={link.path}
                      onClick={onClose}
                    >
                      {link.text}
                    </Link>
                    <Divider my='1rem' />
                  </Box>
                );
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
