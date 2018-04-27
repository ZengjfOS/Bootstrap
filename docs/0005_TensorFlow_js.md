# TensorFlow.js

## 参考文档

* [TensorFlow.js发布：使用JS进行机器学习并在浏览器中运行](https://zhuanlan.zhihu.com/p/35218234)
* [TensorFlow.js](https://js.tensorflow.org/)
* [tensorflow/tfjs-examples](https://github.com/tensorflow/tfjs-examples)
* [Tutorials & Guides](https://js.tensorflow.org/tutorials/)

## 基本示例

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- Load TensorFlow.js -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.10.0"> </script>

    <!-- Place your code in the script tag below. You can also use an external .js file -->
    <script>
      // Notice there is no 'import' statement. 'tf' is available on the index-page
      // because of the script tag above.

      // Define a model for linear regression.
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));

      // Prepare the model for training: Specify the loss and the optimizer.
      model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

      // Generate some synthetic data for training.
      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

      // Train the model using the data.
      model.fit(xs, ys).then(() => {
        // Use the model to do inference on a data point the model hasn't seen before:
        // Open the browser devtools to see the output
        model.predict(tf.tensor2d([5], [1, 1])).print();
      });
    </script>
  </head>

  <body>
  </body>
</html>
```

## Tensors

* TensorFlow.js的核心是Tensor；
* 一组数据被分割成一维或者多维数据；
* 每一个Tensor，都有一个shape来定义Tensor的维度；
* 对于基本的一些维度，TensorFlow有如下常用方法：
  * tf.scalar: 标量；
  * tf.tensor1d: 1维； 
  * tf.tensor2d: 2维；
  * tf.tensor3d: 3维；
  * tf.tensor4d: 4维；

## Varialbes

* Variables are primarily used to store and then update values during model training.

## Operations (Ops)

* square
* add
* sub
* mul

## Models and Layers

* a model is a function that given some input will produce some desired output.
* 两种方式创建model：
  * 自己创建model函数；
  * 使用tf自带的model创建model，这个只需要配置好需要的算法就可以用了。

### Memory Management: dispose and tf.tidy

TensorFlow.js使用GPU进行加速数学运算，当进行tensors、variables计算时需要管理GPU的内存：
* dispose: You can call dispose on a tensor or variable to purge it and free up its GPU memory;
* tf.tidy executes a function and purges any intermediate tensors created, freeing up their GPU memory. It does not purge the return value of the inner function.
