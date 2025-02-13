export const useInsertTree = () => {
  function insertTree(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now().toString(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertTree(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function updateTree(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      return { ...tree, name: item };
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return updateTree(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, folderId) {
    if (!tree || !tree.items) return tree;

    tree.items = tree.items.filter((item) => item.id !== folderId);

    tree.items.forEach((item) => {
      if (item.isFolder) {
        deleteNode(item, folderId);
      }
    });

    return tree;
  }

  return { insertTree, updateTree, deleteNode };
};
