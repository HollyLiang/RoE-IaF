import { Component } from '@angular/core';

import {
  CompactType,
  DisplayGrid,
  Draggable,
  GridsterConfig,
  GridsterItem,
  GridType,
  PushDirections,
  Resizable
} from 'angular-gridster2';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'my-app',
  templateUrl: './building.page.html',
  styleUrls: ['./building.page.scss']
})
export class BuildingPage {
  options: Safe = <Safe>{};
  dashboard: Array<GridsterItem> = [];
  isShowDelete = false;

  get structureNum() {
    return this.dashboard.filter(x => x.rows === 1).length;
  }

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      margin: 2,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 0,
      minCols: 1,
      maxCols: 100,
      minRows: 50,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 30,
      fixedRowHeight: 30,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 32,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: false
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemChangeCallback: this.itemChange.bind(this)
    };

    const data = localStorage.getItem('map-simulator');
    if (data) {
      this.dashboard = JSON.parse(data);
    } else {
      this.initDashboard();
    }
  }

  initDashboard() {
    this.dashboard = [
      { cols: 3, rows: 3, y: 11, x: 11, type: 2, content: '堡壘' },
      // { cols: 3, rows: 3, y: 30, x: 11, type: 2, content: '堡壘' },
      { cols: 2, rows: 2, y: 17, x: 6, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 17, x: 9, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 17, x: 13, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 17, x: 16, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 6, x: 7, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 6, x: 10, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 6, x: 13, type: 1, content: '城堡' },
      { cols: 2, rows: 2, y: 6, x: 16, type: 1, content: '城堡' }
    ];

    let start = 10,
      end = 14;
    for (let i = 0; i <= 3; i++) {
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start,
        x: start + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + i,
        x: end,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: end,
        x: start + 1 + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + 1 + i,
        x: start,
        type: 11,
        content: '作坊'
      });
    }

    (start = 8), (end = 16);
    for (let i = 0; i <= 7; i++) {
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start,
        x: start + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + i,
        x: end,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: end,
        x: start + 1 + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + 1 + i,
        x: start,
        type: 11,
        content: '作坊'
      });
    }

    (start = 5), (end = 19);
    for (let i = 0; i <= 13; i++) {
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start,
        x: start + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + i,
        x: end,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: end,
        x: start + 1 + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + 1 + i,
        x: start,
        type: 11,
        content: '作坊'
      });
    }
    (start = 3), (end = 21);
    for (let i = 0; i <= 17; i++) {
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start,
        x: start + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + i,
        x: end,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: end,
        x: start + 1 + i,
        type: 11,
        content: '作坊'
      });
      this.dashboard.push({
        cols: 1,
        rows: 1,
        y: start + 1 + i,
        x: start,
        type: 11,
        content: '作坊'
      });
    }

    // for (let i = 0; i <= 24; i++) {
    //   this.dashboard.push({
    //     cols: 1,
    //     rows: 1,
    //     y: 29,
    //     x: i,
    //     type: 11,
    //     content: '作坊'
    //   });
    // }
    // for (let i = 0; i <= 10; i++) {
    //   this.dashboard.push({
    //     cols: 1,
    //     rows: 1,
    //     y: 32,
    //     x: i,
    //     type: 11,
    //     content: '作坊'
    //   });
    //   this.dashboard.push({
    //     cols: 1,
    //     rows: 1,
    //     y: 32,
    //     x: i + 14,
    //     type: 11,
    //     content: '作坊'
    //   });
    // }

    this.save();
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  addAC(): void {
    this.dashboard.push({
      cols: 3,
      rows: 3,
      y: 0,
      x: 0,
      type: 2,
      content: '堡壘'
    });
  }

  addCastle(): void {
    this.dashboard.push({
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      type: 1,
      content: '城堡'
    });
  }

  addFortress(): void {
    this.dashboard.push({
      cols: 3,
      rows: 3,
      y: 0,
      x: 0,
      type: 3,
      content: '要塞'
    });
  }

  addStucture(type = 11): void {
    let content = '';
    if (type === 11) content = '作坊';
    else if (type === 12) content = '營地';
    else if (type === 13) content = '強攻';
    else if (type === 14) content = '堅守';
    this.dashboard.push({ cols: 1, rows: 1, y: 0, x: 0, type, content });
  }

  itemChange(item: any, grid: any) {
    // console.log(JSON.stringify(this.dashboard));
    this.save();
  }

  onDeleteClick(item: any) {
    console.log(item);
    const index = this.dashboard.findIndex(
      i => i.x === item.x && i.y === item.y
    );
    this.dashboard.splice(index, 1);
  }

  save() {
    localStorage.setItem('map-simulator', JSON.stringify(this.dashboard));
  }
}
