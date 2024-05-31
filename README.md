# K6-Foundation

### 📂 test-types folder

Types of tests K6 can perform. Simple examples like: Load test, Smoke test, Soak Test, Spike test & Stress Test.

### 📂 test-scripts folder

Creating Scripts with K6. Scripts that contains assertions, response validations, metrics & custom metrics, tags & custom tags.

### 📂 test-using-parameters folder

Using parameters with K6. Simple examples of random (string, item, sleep, array) functions and how to use external JSON & CSV.

### 📂 k6-cloud folder

K6 Cloud. Tests ready to run using the power of the cloud.

### 📂 browser-testing folder

K6 browser module. A test example of browser testing with k6 module.

### 🔗 Tool Links

- [Grafana K6 Cloud](https://grafana.com/products/cloud/k6/)

- [Mocky](https://designer.mocky.io/)

- [Grafana k6 REST and WS Play](https://test-api.k6.io/)

### ⚙️ Execution commands

If you want to execute one test locally:

```sh
  k6 run ./script.js
```

If you want to execute one test locally and debug:

```sh
  k6 run --http-debug=full script.js
```

If you want to execute one test locally and export the results to the cloud:

```sh
  k6 run script.js -o cloud
```


