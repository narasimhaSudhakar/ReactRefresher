 const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public first level",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested secondLevel",
          isFolder: true,
          items: [
            { id: "4", name: "index.html 3rdLevel", isFolder: false, items: [] },
            { id: "5", name: "hello.html 3rdLevel", isFolder: false, items: [] },
          ],
        },
        {
          id: "6",
          name: "public nested secondLevel",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src first level",
      isFolder: true,
      items: [
        { id: "8", name: "app.js secondLevel", isFolder: false, items: [] },
        { id: "9", name: "index.js secondLevel ", isFolder: false, items: [] },
        { id: "10", name: "styles.css secondLevel", isFolder: false, items: [] },
      ],
    },
    { id: "11",
     name: "package.json first level",
      isFolder: false,
       items: []
     },
  ],
};

export default explorer;
