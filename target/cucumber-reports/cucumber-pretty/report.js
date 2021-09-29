$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("todo.feature");
formatter.feature({
  "line": 1,
  "name": "Add new item to ToDO list",
  "description": "",
  "id": "add-new-item-to-todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification Of Plan Details",
  "description": "",
  "id": "add-new-item-to-todo-list;verification-of-plan-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify SPEND and SAVE menu is appears on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify the Aspiration and Aspiration Plus products available",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Aspiration menu and verify Signup option is appears",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify Prices of monthly and yearly plan",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoStepDefinition.user_already_on_home_page()"
});
formatter.result({
  "duration": 29128331100,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.verify_SPEND_and_SAVE_menu_is_appears_on_home_page()"
});
formatter.result({
  "duration": 57165600,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.verify_the_Aspiration_and_Aspiration_Plus_products_available()"
});
formatter.result({
  "duration": 86767700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.select_Aspiration_menu_and_verify_Signup_option_is_appears()"
});
formatter.result({
  "duration": 93777300,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.verify_Prices_of_monthly_and_yearly_plan()"
});
formatter.result({
  "duration": 338743500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[5]/div/div/form/div[2]/span/label\"}\n  (Session info: chrome\u003d93.0.4577.82)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027SIVAKRISHNAN-HO\u0027, ip: \u0027192.168.45.55\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.82, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\SIVAKR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49371}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8bda21764b8e79e3a050732c6081022f\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[5]/div/div/form/div[2]/span/label}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat pages.HomePage.verifyMonthlyPlan(HomePage.java:73)\r\n\tat stepDefinitions.ToDoStepDefinition.verify_Prices_of_monthly_and_yearly_plan(ToDoStepDefinition.java:72)\r\n\tat ✽.And Verify Prices of monthly and yearly plan(todo.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ToDoStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Verification Of People Api returns response as 200",
  "description": "",
  "id": "add-new-item-to-todo-list;verification-of-people-api-returns-response-as-200",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "verify People Api returns 200 as response code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "ToDoStepDefinition.verify_People_Api_returns_as_response_code(int)"
});
formatter.result({
  "duration": 1676821100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify that height is greater than 200",
  "description": "",
  "id": "add-new-item-to-todo-list;verify-that-height-is-greater-than-200",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Verify that the total number of people \"\u003ctotal\u003e\" where height is greater than two hundred",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "add-new-item-to-todo-list;verify-that-height-is-greater-than-200;",
  "rows": [
    {
      "cells": [
        "total"
      ],
      "line": 20,
      "id": "add-new-item-to-todo-list;verify-that-height-is-greater-than-200;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 21,
      "id": "add-new-item-to-todo-list;verify-that-height-is-greater-than-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that height is greater than 200",
  "description": "",
  "id": "add-new-item-to-todo-list;verify-that-height-is-greater-than-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Verify that the total number of people \"10\" where height is greater than two hundred",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 40
    }
  ],
  "location": "ToDoStepDefinition.verify_that_the_total_number_of_people_where_height_is_greater_than_two_hundred(String)"
});
formatter.result({
  "duration": 1520130400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify the 10 individual People",
  "description": "",
  "id": "add-new-item-to-todo-list;verify-the-10-individual-people",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Verify that following is the ten \"\u003cpeople\u003e\" returned By Api",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "add-new-item-to-todo-list;verify-the-10-individual-people;",
  "rows": [
    {
      "cells": [
        "people"
      ],
      "line": 28,
      "id": "add-new-item-to-todo-list;verify-the-10-individual-people;;1"
    },
    {
      "cells": [
        "Darth Vader,Chewbacca,Roos Tarpals,Rugor Nass,Yarael Poof,Lama Su,Tuan Wu,Grievous,Tarfful,Tion Medon"
      ],
      "line": 29,
      "id": "add-new-item-to-todo-list;verify-the-10-individual-people;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the 10 individual People",
  "description": "",
  "id": "add-new-item-to-todo-list;verify-the-10-individual-people;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Verify that following is the ten \"Darth Vader,Chewbacca,Roos Tarpals,Rugor Nass,Yarael Poof,Lama Su,Tuan Wu,Grievous,Tarfful,Tion Medon\" returned By Api",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Darth Vader,Chewbacca,Roos Tarpals,Rugor Nass,Yarael Poof,Lama Su,Tuan Wu,Grievous,Tarfful,Tion Medon",
      "offset": 34
    }
  ],
  "location": "ToDoStepDefinition.verify_that_following_is_the_ten_returned_By_Api(String)"
});
formatter.result({
  "duration": 1401992900,
  "error_message": "java.lang.AssertionError: Lists differ at element [0]: Chewbacca !\u003d Beru Whitesun lars expected [Chewbacca] but found [Beru Whitesun lars]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:831)\r\n\tat org.testng.Assert.assertEquals(Assert.java:796)\r\n\tat stepDefinitions.ToDoStepDefinition.verify_that_following_is_the_ten_returned_By_Api(ToDoStepDefinition.java:124)\r\n\tat ✽.Then Verify that following is the ten \"Darth Vader,Chewbacca,Roos Tarpals,Rugor Nass,Yarael Poof,Lama Su,Tuan Wu,Grievous,Tarfful,Tion Medon\" returned By Api(todo.feature:26)\r\n",
  "status": "failed"
});
});