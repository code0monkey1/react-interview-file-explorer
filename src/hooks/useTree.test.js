// useTree.test.js
import { renderHook } from '@testing-library/react-hooks';

import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import useTree from './useTree';

describe('useTree', () => {
  test('sets tree data correctly', () => {
    const treeData = { id: 'root', name: 'Root', isFolder: true, open: true, items: [] };
    const { result } = renderHook(() => useTree(treeData));
    expect(result.current.tree).toEqual(treeData);
  });

  test('renders root node correctly', () => {
    render(<App />);
    const rootNode = screen.getByText(/root/i);
    expect(rootNode).toBeInTheDocument();
  });

  test('toggles folder node correctly', () => {
    const treeData = {
      id: 'root',
      name: 'Root',
      isFolder: true,
      open: true,
      items: [
        { id: 'folder1', name: 'Folder 1', isFolder: true, open: false, items: [] },
        { id: 'file1', name: 'File 1', isFolder: false },
      ],
    };
    const { result } = renderHook(() => useTree(treeData));
    const folderNode = result.current.tree.items[0];
    const toggledTree = result.current.getToggledTree(folderNode.id);
    expect(toggledTree.items[0].open).toBe(true);
    expect(toggledTree.items[0].items).toHaveLength(0);
  });

  test('renders folder items correctly', () => {
    const treeData = {
      id: 'root',
      name: 'Root',
      isFolder: true,
      open: true,
      items: [
        { id: 'folder1', name: 'Folder 1', isFolder: true, open: false, items: [] },
        { id: 'file1', name: 'File 1', isFolder: false },
      ],
    };
    render(<App />);
    const folderNode = screen.getByText(/folder 1/i);
    fireEvent.click(folderNode);
    const fileNode = screen.getByText(/file 1/i);
    expect(fileNode).toBeInTheDocument();
  });

  test('closes folder input correctly', () => {
    render(<App />);
    const folderNode = screen.getByText(/folder 1/i);
    fireEvent.click(folderNode);
    const inputNode = screen.getByPlaceholderText(/file type/i);
    fireEvent.change(inputNode, { target: { value: 'jpg' } });
    fireEvent.mouseDown(document);
    expect(inputNode).not.toBeInTheDocument();
  });
});