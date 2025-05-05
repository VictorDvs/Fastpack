// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installation',
      items: ['install/prerequisites', 'install/installation'],
    },
    {
      type: 'category',
      label: 'Commandes',
      items: ['commands/init', 'commands/build', 'commands/clean'],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['config/config-file', 'config/options'],
    },
    'faq',
  ],
};
module.exports = sidebars;



