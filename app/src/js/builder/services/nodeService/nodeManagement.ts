import { exitTransition } from '../../utils/transitions';
import { deleteNode } from './nodeService';
import { showNotification } from '../../utils/notifications';
import { removeNodeById } from './nodeState';

export function initNodeManagement(): void {
  document.addEventListener('keydown', e => {
    if (e.key === 'Delete') {
      const selectedNode = document.querySelector('.node-selected') as HTMLElement;
      if (selectedNode) {
        exitTransition(selectedNode, 'scale', 200).then(() => {
          const nodeId = selectedNode.id;
          deleteNode(selectedNode);
          removeNodeById(nodeId);
          showNotification('Node deleted', 'info');
        });
      }
    }
  });
}
