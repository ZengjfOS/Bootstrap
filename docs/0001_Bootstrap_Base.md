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
