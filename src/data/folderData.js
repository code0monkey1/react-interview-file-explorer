function generateExplorer(id, depth, maxDepth) {
  const isFolder = depth < maxDepth;
  const items = isFolder ? Array.from({ length: Math.floor(Math.random() * 2) + 3 }, (_, i) => generateExplorer(`${id}-${i}`, depth + 1, maxDepth)) : [];
  return {
    id,
    name: `Item ${id}`,
    isFolder,
    items,
  };
}

const data = {
  id: '1',
  name: 'root',
  isFolder: true,
  items: Array.from({ length: 5 }, (_, i) => generateExplorer(`2-${i}`, 1, 2)),
};

// const data = {
//   id: '1',
//   name: 'root',
//   isFolder: true,
//   items: [
//     {
//       id: '2',
//       name: 'public',
//       isFolder: true,
//       items: [
//         {
//           id: '3',
//           name: 'public nested 1',
//           isFolder: true,
//           items: [
//             {
//               id: '4',
//               name: 'index.html',
//               isFolder: false,
//               items: [],
//             },
//             {
//               id: '5',
//               name: 'hello.html',
//               isFolder: false,
//               items: [],
//             },
//           ],
//         },
//         {
//           id: '6',
//           name: 'public_nested_file',
//           isFolder: false,
//           items: [],
//         },
//       ],
//     },
//     {
//       id: '7',
//       name: 'src',
//       isFolder: true,
//       items: [
//         {
//           id: '8',
//           name: 'App.js',
//           isFolder: false,
//           items: [],
//         },
//         {
//           id: '9',
//           name: 'Index.js',
//           isFolder: false,
//           items: [],
//         },
//         {
//           id: '10',
//           name: 'styles.css',
//           isFolder: false,
//           items: [],
//         },
//       ],
//     },
//     {
//       id: '11',
//       name: 'package.json',
//       isFolder: false,
//       items: [],
//     },
//     ...Array.from({ length: 87 }, (_, i) => ({
//       id: `${i + 12}`,
//       name: `Item ${i + 12}`,
//       isFolder: false,
//       items: [],
//     })),
//   ],
// };

export default data