'use client';

import { PageLinkList } from '@/lib/constant';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Flex, Link } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Box,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram } from 'react-icons/fa';

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
        h={{ base: '80px', md: '100px' }}
        p='0 1rem 0 0'
        zIndex={100}
        bg='rgba(255, 255, 255, 0.5)'
      >
        <Image
          src='logo_transparent.jpg'
          borderRadius='full'
          boxSize={{ base: '120px', md: '150px' }}
          alt='logo_transparent'
        />

        <Flex
          display={{ base: 'none', lg: 'flex' }}
          justify='space-between'
          gap='1rem'
          w='auto'
        >
          {PageLinkList.map((link, i) => {
            return (
              <Link
                key={`${link.path}-${i}`}
                as={NextLink}
                fontWeight='bold'
                color={path === link.path ? '#000' : 'gray.700'}
                href={link.path}
              >
                {link.text}
              </Link>
            );
          })}
          <Link as={NextLink} href={process.env.NEXT_PUBLIC_INSTAGRAM}>
            <FaInstagram fontSize='1.5rem' />
          </Link>
        </Flex>
        <HamburgerIcon
          display={{ base: 'flex', md: 'none' }}
          width={{ base: '1.5rem', md: '2rem' }}
          height={{ base: '1.5rem', md: '2rem' }}
          onClick={onOpen}
          alignItems='center'
        />
      </Flex>

      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody py='2rem'>
            <Flex justify='center' flexDir='column' textAlign='center'>
              {[
                { path: '/', text: 'Home' },
                { path: '/about', text: 'About' },
                { path: '/plan', text: 'プラン・料金' },
                { path: '/question', text: 'よくある質問' },
                { path: '/contact', text: 'お問い合わせ' },
              ].map((link) => {
                return (
                  <Box key={link.path}>
                    <Link
                      as={NextLink}
                      fontWeight='bold'
                      color={path === link.path ? '#000' : 'gray.700'}
                      href={link.path}
                    >
                      {link.text}
                    </Link>
                    <Divider my='0.25rem' />
                  </Box>
                );
              })}
              {/* <Link as={NextLink} href={process.env.NEXT_PUBLIC_INSTAGRAM}>
                <Flex justify='center' align='center' gap='0.5rem'>
                  <FaInstagram fontSize='1.5rem' />
                  <Text fontWeight='bold'>Instagram</Text>
                </Flex>
              </Link> */}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
