import React from 'react';
import Link from 'next/link';
import { Header, Menu, SocialMedia } from './NavStyles';

const menu = [
  { link: '/', name: 'Home' },
  { link: '/projects', name: 'Projects' },
  { link: '/blog', name: 'Blog' },
];

const social_media = [
  { link: 'https://www.facebook.com/rabeloglr', name: 'facebook', icon: '' },
  { link: 'https://twitter.com/rabeloglr', name: 'twitter', icon: '' },
  { link: 'https://github.com/gabrielima', name: 'github', icon: '' },
  { link: 'https://www.linkedin.com/in/gabrielima', name: 'linkedin', icon: '' },
];

const Nav = () => (
  <Header>
    <Menu>
      {menu.map((item, index) => (
        <Link href={item.link} key={index}>
          <Menu.Item> {item.name} </Menu.Item>
        </Link>
      ))}
    </Menu>

    <SocialMedia>
      {social_media.map((social, index) => (
        <SocialMedia.Item
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener nofollow"
        >
          {social.icon}
        </SocialMedia.Item>
      ))}
    </SocialMedia>
  </Header>
);

export default Nav;
