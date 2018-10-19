import React, { Component } from 'react';
import Link from 'next/link';
import './nav.scss';

class Nav extends Component {
  menu = [
    { link: '/', name: 'Home' },
    { link: '/projects', name: 'Projects' },
    { link: '/blog', name: 'Blog' },
  ];

  social_media = [
    { link: 'https://www.facebook.com/rabeloglr', name: 'facebook' },
    { link: 'https://twitter.com/rabeloglr', name: 'twitter' },
    { link: 'https://github.com/gabrielima', name: 'github' },
    { link: 'https://www.linkedin.com/in/gabrielima', name: 'linkedin' },
  ];

  constructor() {
    super();

    this.state = {
      menuIsOpen: false,
    };

    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    const menuIsOpen = !this.state.menuIsOpen
    this.setState({
      menuIsOpen
    });
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <header className="header container">
        <aside className={'menu' + (menuIsOpen ? ' open' : '')}>
          <nav className="menu__items">
            {this.menu.map((item, index) => (
              <Link href={item.link} key={index}>
                <a className="menu__item"> {item.name} </a>
              </Link>
            ))}
          </nav>
        </aside>

        <button
          className={'menu__handle' + (menuIsOpen ? ' open' : '')}
          onClick={() => this.toggleSideMenu()}>
          <span></span>
        </button>

        <div className="social-media">
          {this.social_media.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="social-media__link"
              target="_blank"
              rel="noopener nofollow"
            >
              <img src={`/static/img/social_media/${social.name}.jpg`} alt={social.name} />
            </a>
          ))}
        </div>
      </header>
    );
  }
}

export default Nav;
