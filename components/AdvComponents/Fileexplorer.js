import { useState } from "react";
import explorer from "./Data/FolderData";
import { Folder } from "./Folder";

export const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  return (
    <div>
      File Explorer
      <Folder explorer={explorerData} />
    </div>
  );
};
