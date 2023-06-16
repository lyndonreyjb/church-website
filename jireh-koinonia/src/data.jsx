import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { nanoid } from "nanoid";

export const links = [
  {
    pageId: nanoid(),
    url: "/",
    page: "home",
    sublinks: [],
  },
  {
    pageId: nanoid(),
    url: "/connect",
    page: "connect",
    sublinks: [],
  },
  {
    pageId: nanoid(),
    url: "/contact",
    page: "contact",
    sublinks: [],
  },
  {
    pageId: nanoid(),
    page: "about",
    sublinks: [
      {
        id: nanoid(),
        label: "who we are",
        url: "/about/who-we-are",
      },
      {
        id: nanoid(),
        label: "what we believe",
        url: "/about/what-we-believe",
      },
      {
        id: nanoid(),
        label: "our location",
        url: "/about/our-location",
      },
    ],
  },
];

export const social = [
  {
    id: nanoid(),
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: nanoid(),
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: nanoid(),
    url: "https://www.twitter.com",
    icon: <FaInstagram />,
  },
];
