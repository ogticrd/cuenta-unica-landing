import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'navbar',
        label: 'Navbar',
        path: 'content/navbar',
        fields: [
          {
            type: 'object',
            name: 'button',
            label: 'Button',

            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Label',
              },
              {
                type: 'string',
                name: 'href',
                label: 'Href',
              },
            ],
          },
        ],
      },
      {
        name: 'hero',
        label: 'Hero',
        path: 'content/hero',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
          },
          {
            type: 'string',
            name: 'titleRed',
            label: 'Title Red',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },

          {
            type: 'object',
            name: 'button',
            label: 'Button',
            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Label',
              },
              {
                type: 'string',
                name: 'href',
                label: 'Href',
              },
            ],
          },
        ],
      },
      {
        name: 'description',
        label: 'Description',
        path: 'content/description',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'string',
          },
          {
            name: 'titleBlue',
            label: 'Title Blue',
            type: 'string',
          },
          {
            name: 'description',
            label: 'Description',
            type: 'string',
          },
        ],
      },
      {
        name: 'benefits',
        label: 'Benefits',
        path: 'content/benefits',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'string',
          },
          {
            name: 'benefits',
            label: 'Benefits',
            list: true,
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'description',
                label: 'Description',
                type: 'string',
              },
              {
                name: 'image',
                label: 'Image',
                type: 'image',
              },
            ],
          },
        ],
      },
      {
        name: 'stepsToRegister',
        label: 'Steps to Register',
        path: 'content/stepsToRegister',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'string',
          },
          {
            name: 'titleBlue',
            label: 'Title Blue',
            type: 'string',
          },
          {
            name: 'steps',
            label: 'Steps',
            list: true,
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'items',
                label: 'Items',
                type: 'string',
                list: true,
              },
            ],
          },
        ],
      },
      {
        name: 'onlineServices',
        label: 'Online Services',
        path: 'content/onlineServices',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'string',
          },
          {
            name: 'titleBlue',
            label: 'Title Blue',
            type: 'string',
          },
          {
            name: 'description',
            label: 'Description',
            type: 'string',
          },
          {
            name: 'button',
            label: 'Button',
            type: 'object',
            fields: [
              {
                name: 'label',
                label: 'Label',
                type: 'string',
              },
              {
                name: 'href',
                label: 'Href',
                type: 'string',
              },
            ],
          },
        ],
      },
      {
        name: 'questions',
        label: 'Questions',
        path: 'content/questions',
        fields: [
          {
            name: 'questions',
            label: 'Questions',
            list: true,
            type: 'object',
            fields: [
              {
                name: 'question',
                label: 'Question',
                type: 'string',
              },
              {
                name: 'answer',
                label: 'Answer',
                type: 'string',
              },
            ],
          },
        ],
      },
      {
        name: 'footer',
        label: 'Footer',
        path: 'content/footer',
        fields: [
          {
            name: 'knowUs',
            label: 'Know Us',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'text',
                label: 'Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'contact',
            label: 'Contact',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'items',
                label: 'Items',
                type: 'string',
                list: true,
              },
            ],
          },
          {
            name: 'search',
            label: 'Search',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'text',
                label: 'Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'info',
            label: 'Info',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'text',
                label: 'Text',
                type: 'string',
              },
              {
                name: 'href',
                label: 'Href',
                type: 'string',
              },
            ],
          },
          {
            name: 'socialNetworks',
            label: 'Social Networks',
            type: 'object',
            fields: [
              {
                name: 'facebook',
                label: 'Facebook',
                type: 'string',
              },
              {
                name: 'twitter',
                label: 'Twitter',
                type: 'string',
              },
              {
                name: 'instagram',
                label: 'Instagram',
                type: 'string',
              },
              {
                name: 'youtube',
                label: 'Youtube',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  },
});
