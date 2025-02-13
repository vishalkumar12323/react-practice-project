import React, { useEffect, useState } from "react";
import "../styles/file-explorer.css";
import { VscEdit, VscNewFile, VscNewFolder } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

export const FileExplorer = ({
  handleDeleteTreeNode,
  handleUpdateNode,
  handleInsertNode,
  explorerData,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [inputValue, setInputValue] = useState("");
  const [showRenameItemInput, setShowRenameItemInput] = useState({
    visible: false,
    isFolder: null,
    id: "",
  });

  const [renameFile, setRenameFile] = useState("");

  useEffect(() => {
    setExpand(false);
  }, [explorerData]);

  const handleAddNewFolder = (e) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: true,
    });
    setExpand(true);
  };
  const handleAddNewFile = (e) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: false,
    });
    setExpand(true);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && event.target.value) {
      handleInsertNode(explorerData.id, event.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
      setInputValue("");
    }
  };

  const onFileRename = (event) => {
    if (event.key === "Enter" && renameFile) {
      console.log("Entered");
      handleUpdateNode(
        explorerData.id,
        renameFile,
        showRenameItemInput.isFolder
      );

      setRenameFile("");
      setShowRenameItemInput({ ...showRenameItemInput, visible: false });
    }
  };

  const onTreeItemDelete = (event, isFolder) => {
    event.stopPropagation();
    handleDeleteTreeNode(explorerData.id, isFolder);
  };

  return (
    <div className="file-explorer">
      <ul className="file-list">
        {explorerData.isFolder ? (
          <div>
            <li onClick={() => setExpand(!expand)} className="folder">
              📁{" "}
              {showRenameItemInput.visible &&
              showRenameItemInput.isFolder &&
              showRenameItemInput.id === explorerData.id ? (
                <input
                  type="text"
                  className="rename-input"
                  defaultValue={explorerData.name}
                  onChange={(e) => setRenameFile(e.target.value)}
                  onBlur={() =>
                    setShowRenameItemInput({
                      ...showRenameItemInput,
                      visible: false,
                    })
                  }
                  onKeyDown={(e) => onFileRename(e)}
                  autoFocus
                />
              ) : (
                explorerData.name
              )}
            </li>
            <div className="list-buttons">
              <abbr title="New File...">
                <VscNewFile size={18} onClick={(e) => handleAddNewFile(e)} />
              </abbr>
              <abbr title="New Folder...">
                <VscNewFolder
                  size={20}
                  onClick={(e) => handleAddNewFolder(e)}
                />
              </abbr>
              <abbr title="Rename Folder...">
                <VscEdit
                  size={19}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRenameItemInput({
                      visible: true,
                      isFolder: true,
                      id: explorerData.id,
                    });
                  }}
                />
              </abbr>
              <abbr title="Delete Folder...">
                <AiOutlineDelete
                  size={20}
                  onClick={(e) => onTreeItemDelete(e, explorerData.isFolder)}
                />
              </abbr>
            </div>
          </div>
        ) : (
          <div>
            <li className="file">📄 {explorerData.name}</li>
            <div className="list-buttons">
              <abbr title="Rename File...">
                <VscEdit
                  size={19}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRenameItemInput({
                      visible: true,
                      isFolder: false,
                      id: explorerData.id,
                    });
                  }}
                />
              </abbr>
              <abbr title="Delete File...">
                <AiOutlineDelete
                  size={20}
                  onClick={(e) => onTreeItemDelete(e, explorerData.isFolder)}
                />
              </abbr>
            </div>
          </div>
        )}

        {showInput.visible && (
          <div
            style={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
              marginTop: "10px",
            }}>
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              className="input"
              value={inputValue}
              autoFocus
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              onKeyDown={(e) => handleEnterPress(e)}
            />
          </div>
        )}
      </ul>
      <div style={expand ? { display: "block" } : { display: "none" }}>
        {explorerData.items.map((exp) => {
          return (
            <FileExplorer
              handleDeleteTreeNode={handleDeleteTreeNode}
              handleUpdateNode={handleUpdateNode}
              handleInsertNode={handleInsertNode}
              explorerData={exp}
              key={exp.id}
            />
          );
        })}
      </div>
    </div>
  );
};
