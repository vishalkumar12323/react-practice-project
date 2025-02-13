export const files = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "web-view.png",
          isFolder: false,
          items: [],
        },
        {
          id: "4",
          name: "style.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "5",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "6",
          name: "index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "7",
          name: "middleware.js",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "8",
      name: ".gitignore",
      isFolder: false,
      items: [],
    },
    {
      id: "9",
      name: "package.json",
      isFolder: false,
      items: [],
    },
    {
      id: "10",
      name: "node_modules",
      isFolder: true,
      items: [
        {
          id: "11",
          name: "express",
          isFolder: true,
          items: [],
        },
      ],
    },
  ],
};

export const comments = [
  {
    id: "1",
    parentId: null,
    text: "This is a parent comment",
    replies: [
      {
        id: "2",
        parentId: "1",
        text: "This is a nested reply",
        replies: [
          {
            id: "3",
            parendId: "2",
            text: "This is another nested reply",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    parentId: null,
    text: "This is second parent comment",
    replies: [
      {
        id: "5",
        parentId: "4",
        text: "This is nested reply",
        replies: [],
      },
    ],
  },
];
