import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import TreeView from '@material-ui/lab/TreeView';
import React, { useEffect, useState } from "react";
import { useActions } from '../../bll/hooks/useActions';
import { useTypedSelector } from "../../bll/hooks/useTypedSelector";
import { IElementStructureItem } from "../../interfaces/interfaces";
import { StyledTreeItem, useStyles } from "../../material-styling/material-styling";

const FilesExplorer = () => {
  const { fetchData, fetchDataById } = useActions();
  const files = useTypedSelector(state => state.files);
  const [arrayCheck, setArrayCheck] = useState<number[]>([]);
  const [expanded, setExpanded] = useState<string[]>(['0']);
  const classes = useStyles();
  useEffect(() => {
    fetchData()
  }, []);
  const onClickFetch = (neededId: number, neededTitle: string) => {
    if (neededId === 0) handleRootClick();
    if (neededTitle.split('.').length > 1 || neededTitle === files.title) return;
    checkIfFetched(neededId);
    collapseHandler(neededId);
  }
  const checkIfFetched = (neededId: number) => {
    if (!arrayCheck.includes(neededId)) {
      setArrayCheck([...arrayCheck, neededId]);
      fetchDataById(neededId);
    }
  };
  const collapseHandler = (neededId: number) => {
    let str = neededId.toString()

    if (expanded.includes(str)) {
      let newExp = expanded.filter(elem => elem !== str)
      setExpanded([...newExp])
    } else {
      setExpanded([...expanded, str])
    }
  };
  const handleRootClick = () => {
    if (expanded.includes('0')) {
      let newExp = expanded.filter(elem => elem !== '0')
      setExpanded([...newExp])
    } else {
      setExpanded([...expanded, '0'])
    }
  }
  const renderTree = (nodes: IElementStructureItem) => {
    let icon = nodes.title.split('.').length > 1 ? PermMediaIcon : FolderIcon
    return <StyledTreeItem bgColor="#e8f0fe" labelIcon={icon}
      key={nodes.id} nodeId={nodes.id.toString()} labelText={nodes.title} onClick={() => onClickFetch(nodes.id, nodes.title)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </StyledTreeItem>
  };

  return (
    <>
      <TreeView
        expanded={expanded}
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(files)}
      </TreeView>
    </>
  );
};

export default FilesExplorer;
