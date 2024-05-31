# K6-Foundation

### 📂 test-types folder

Types of tests K6 can perform. We can found simple examples like: Load test, Smoke test, Soak Test, Spike test & Stress Test.

### 📂 test-scripts folder

Creating Scripts with K6. We can identify scripts that contains assertions, response validations, metrics & custom metrics, tags & custom tags, 

### 📂 test-using-parameters folder

Using parameters with K6. We can found simple examples of random (string, item, sleep, array) functions and how to use external JSON & CSV

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


