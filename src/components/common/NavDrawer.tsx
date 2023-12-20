'use client';
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

import { NavLink } from './Header';
import Logo from './Logo/Logo';
type Props = {
  navLinks: NavLink[];
  isOpen: boolean;
  handleClose: () => void;
};
const NavigationDrawer = ({ navLinks, isOpen, handleClose }: Props) => {
  return (
    <div>
      {/* Drawer Component */}
      <Drawer anchor='left' open={isOpen} onClose={handleClose}>
        {/* List of navigation links */}
        <div className='px-4 pt-8'>
          <Logo />
          <List>
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                component='a'
                href={link.href}
                onClick={handleClose}
                className='py-4'
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationDrawer;
