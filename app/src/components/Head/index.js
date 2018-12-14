import React from 'react';
import NextHead from 'next/head';
import { string, array } from 'prop-types';

const defaultKeywords = ['gabriel lima', 'front-end', 'angular', 'html5', 'css3', 'angularjs', 'web design', 'back-end'];
const defaultDescription = 'Gabriel Lima - Web Developer';
const defaultOgImage = 'http://www.gabrielima.com/static/img/gabrielima.jpg';
const defaultUrl = 'http://www.gabrielima.com';
const defaultTitle = 'Gabriel Lima - Web Developer';

const buildTitle = (title) => title ? title + ' - ' + defaultTitle : defaultTitle;

const Head = ({ title, description, url, ogImage, keywords }) => (
  <NextHead>
    <meta httpEquiv="content-language" content="en-us" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta httpEquiv="revisit-after" content="7 days" />

    <meta name="description" content={ description | defaultDescription } />
    <meta name="generator" content="http://www.gabrielima.com" />
    <meta name="webmaster" content="Gabriel Lima" />
    <meta name="viewport" content="initial-scale=1, user-scalable=yes" />
    <meta name="keywords" content={(keywords || defaultKeywords).join(', ')} />
    <meta name="charset" content="UTF-8" />
    <meta name="author" content="http://www.gabrielima.com" />
    <meta name="robots" content="all" />
    <meta name="title" content={ buildTitle(title) } />

    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:description" content={ description || defaultDescription } />
    <meta property="og:site_name" content="gabrielima.com - Gabriel Lima Web Developer" />
    <meta property="og:title" content={ buildTitle(title) } />
    <meta property="og:image" content={ ogImage || defaultOgImage } />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ url || defaultUrl } />

    <link rel="author" href="https://twitter.com/rabeloglr" />
    <link href="static/favicon.ico" rel="icon" type="image/x-icon" />
    <link rel="canonical" href="http://www.gabrielima.com" />
    <meta name="theme-color" content="#22A7F0" />

    <title>{ buildTitle(title) }</title>
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  keywords: array
}

export default Head;
