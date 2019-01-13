import React from 'react';
import Link from 'next/link';
import { Header, Menu, SocialMedia } from './NavStyles';

import Twitter from '../../static/svg/twitter-logo.svg';
import Github from '../../static/svg/github-logo.svg';
import Linkedin from '../../static/svg/linkedin-logo.svg';

const menu = [
  { link: '/', name: 'Home' },
  { link: '/projects', name: 'Projects' },
  { link: '/blog', name: 'Blog' },
];

const social_media = [
  { link: 'https://twitter.com/rabeloglr', name: 'twitter', icon: <Twitter /> },
  { link: 'https://github.com/gabrielima', name: 'github', icon: <Github /> },
  { link: 'https://www.linkedin.com/in/gabrielima', name: 'linkedin', icon: <Linkedin /> },
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
          aria-label={social.name}
        >
          {social.icon}
        </SocialMedia.Item>
      ))}
    </SocialMedia>
  </Header>
);

export default Nav;
