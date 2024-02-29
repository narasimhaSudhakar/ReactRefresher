import { useState } from "react";
import explorer from "./Data/FolderData";
import { Folder } from "./Folder";
import { UseTreaverseTree } from "./CustomHooks/useTraversetree";

export const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = UseTreaverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
  };
  return (
    <div>
      File Explorer
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};
