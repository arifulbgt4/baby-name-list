import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { updateChilds } from '../../state/ducks/ui/actions';

import ListItem from '../ListItem/ListItem';

const List = () => {
  const childs = useSelector((state) => state.uiState.childs);
  const dispatch = useDispatch();
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = childs[dragIndex];
      dispatch(
        updateChilds(
          update(childs, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        )
      );
    },
    [childs, dispatch]
  );

  const renderItem = (id, name, complete, index) => {
    return (
      <ListItem
        key={id}
        id={id}
        name={name}
        index={index}
        complete={complete}
        moveCard={moveCard}
      />
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ul>
        {childs &&
          childs.map((d, i) => {
            const { id, name, complete } = d;
            return renderItem(id, name, complete, i);
          })}
      </ul>
    </DndProvider>
  );
};

export default List;
