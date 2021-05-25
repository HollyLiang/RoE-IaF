import { Component } from "@angular/core";

import {
  CompactType,
  DisplayGrid,
  Draggable,
  GridsterConfig,
  GridsterItem,
  GridType,
  PushDirections,
  Resizable
} from "angular-gridster2";

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  options: Safe;
  dashboard: Array<GridsterItem>;

  get structureNum (){
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

    this.dashboard = [
      { cols: 3, rows: 3, y: 11, x: 11, bgColor: "#000" },
      { cols: 3, rows: 3, y: 30, x: 11, bgColor: "#000" },
      { cols: 2, rows: 2, y: 17, x: 6, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 17, x: 9, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 17, x: 13, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 17, x: 16, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 6, x: 7, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 6, x: 10, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 6, x: 13, bgColor: "#ff0" },
      { cols: 2, rows: 2, y: 6, x: 16, bgColor: "#ff0" },
    ];

    let start = 10, end = 14;
    for(let i = 0;i <= 3; i++) {
     this.dashboard.push({ cols: 1, rows: 1, y: start, x: start + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + i, x: end, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: end, x: start + 1 + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + 1 + i, x: start, bgColor: "#fcc" });
    }

    start = 8, end = 16;
    for(let i = 0;i <= 7; i++) {
     this.dashboard.push({ cols: 1, rows: 1, y: start, x: start + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + i, x: end, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: end, x: start + 1 + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + 1 + i, x: start, bgColor: "#fcc" });
    }

    start = 5, end = 19;
    for(let i = 0;i <= 13; i++) {
     this.dashboard.push({ cols: 1, rows: 1, y: start, x: start + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + i, x: end, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: end, x: start + 1 + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + 1 + i, x: start, bgColor: "#fcc" });
    }
    start = 3, end = 21;
    for(let i = 0;i <= 17; i++) {
     this.dashboard.push({ cols: 1, rows: 1, y: start, x: start + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + i, x: end, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: end, x: start + 1 + i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: start + 1 + i, x: start, bgColor: "#fcc" });
    }

    for(let i = 0;i <= 24; i++) {
     this.dashboard.push({ cols: 1, rows: 1, y: 29, x: i, bgColor: "#fcc" });
    }
    //  this.dashboard.push({ cols: 1, rows: 1, y: 30, x: 0, bgColor: "#fcc" });
    //  this.dashboard.push({ cols: 1, rows: 1, y: 31, x: 0, bgColor: "#fcc" });
    //  this.dashboard.push({ cols: 1, rows: 1, y: 30, x: 24, bgColor: "#fcc" });
    //  this.dashboard.push({ cols: 1, rows: 1, y: 31, x: 24, bgColor: "#fcc" });
    for(let i = 0;i <= 10; i++) {
     this.dashboard.push({ cols: 1, rows: 1, y: 32, x: i, bgColor: "#fcc" });
     this.dashboard.push({ cols: 1, rows: 1, y: 32, x: i + 14, bgColor: "#fcc" });
    }
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  addAC(): void {
    this.dashboard.push({ cols: 3, rows: 3, y: 0, x: 0, bgColor: "#000" });
  }

  addCastle(): void {
    this.dashboard.push({ cols: 2, rows: 2, y: 0, x: 0, bgColor: "#ff0" });
  }

  addStucture(): void {
    this.dashboard.push({ cols: 1, rows: 1, y: 0, x: 0, bgColor: "#fcc" });
  }

  itemChange(item, grid) {
    console.log(JSON.stringify(this.dashboard));
  }
}
