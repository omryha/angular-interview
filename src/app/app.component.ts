import { Component } from '@angular/core';
import { FileNode } from './interfaces/file-node.interface';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { AlertComponent } from './components/alert/alert.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ThemeSwitcherComponent,
    FileTreeComponent,
    AlertComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public treeData: FileNode[] = [
    {
      name: 'Folder 1',
      children: [
        { name: 'File 1.1' },
        {
          name: 'Folder 1.1',
          children: [{ name: 'File 1.1.1' }, { name: 'File 1.1.2' }],
        },
      ],
    },
    {
      name: 'Folder 2',
      children: [{ name: 'File 2.1' }, { name: 'File 2.2' }],
    },
  ];
}
