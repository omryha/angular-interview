import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FileNode } from '../../interfaces/file-node.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileTreeComponent {
  @Input() treeData: FileNode[] = [];
}
