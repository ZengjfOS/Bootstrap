# Bootstrap Base

## 移动设备

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## Layout

### Containers

* container：有边距
  ```
  <div class="container">
    <!-- Content here -->
  </div>
  ```
* container-fluid：无边距
  ```
  <div class="container-fluid">
    <!-- Content here -->
  </div>
  ```

### Grid options

* Extra small(<576px): .col-
* Small(≥576px): col-sm-
* Medium(≥768px): col-md-
* Large(≥992px): col-lg-
* Extra large(≥1200px): col-xl-

一个element上可以定义多个种类的大小col，这样才能适应不同的尺寸屏的，展示不同的布局情况

## 颜色

### 文本颜色

The classes for text colors are: 
* .text-muted, 
* .text-primary, 
* .text-success, 
* .text-info, 
* .text-warning, 
* .text-danger, 
* .text-secondary, 
* .text-white, 
* .text-dark, 
* .text-body (default body color/often black),
* .text-light.

### 背景颜色

The classes for background colors are: 
* .bg-primary, 
* .bg-success, 
* .bg-info, 
* .bg-warning, 
* .bg-danger, 
* .bg-secondary, 
* .bg-dark,
* .bg-light.

## 表格

### 基本设置

* .table: adds basic styling to a table
* .table-striped: adds zebra-stripes to a table
* .table-bordered: adds borders on all sides of the table and cells
* .table-hover: adds a hover effect (grey background color) on table rows
* .table-dark: adds a black background to the table

### 表格颜色

|table class| info |
|--:|:--|
|.table-primary   | Blue: Indicates an important action
|.table-success   | Green: Indicates a successful or positive action
|.table-danger    | Red: Indicates a dangerous or potentially negative action
|.table-info      | Light blue: Indicates a neutral informative change or action
|.table-warning   | Orange: Indicates a warning that might need attention
|.table-active    | Grey: Applies the hover color to the table row or table cell
|.table-secondary | Grey: Indicates a slightly less important action
|.table-light     | Light grey table or table row background
|.table-dark      | Dark grey table or table row background

## 图片

* .rounded: adds rounded corners to an image
* .rounded-circle: shapes the image to a circle
* .img-thumbnail: shapes the image to a thumbnail (bordered)

## 提示信息

Alerts are created with the .alert class, followed by one of the contextual classes:
* .alert-success, 
* .alert-info, 
* .alert-warning, 
* .alert-danger, 
* .alert-primary, 
* .alert-secondary, 
* .alert-light,
* .alert-dark.

## 按键

* `<button type="button" class="btn">Basic</button>`
* `<button type="button" class="btn btn-primary">Primary</button>`
* `<button type="button" class="btn btn-secondary">Secondary</button>`
* `<button type="button" class="btn btn-success">Success</button>`
* `<button type="button" class="btn btn-info">Info</button>`
* `<button type="button" class="btn btn-warning">Warning</button>`
* `<button type="button" class="btn btn-danger">Danger</button>`
* `<button type="button" class="btn btn-dark">Dark</button>`
* `<button type="button" class="btn btn-light">Light</button>`
* `<button type="button" class="btn btn-link">Link</button>`
