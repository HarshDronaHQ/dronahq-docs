---
sidebar_position: 1
title: Using Iterate
---

import Image from '@site/src/components/Image';
import Thumbnail from '@site/src/components/Thumbnail';

This article discusses how to utilize the Iterate Task Action to perform a series of tasks repeatedly in different scenarios.

#### Use Cases Covered:

1. Bulk Insert Records into a Database
2. Bulk Update API Data
3. Merging Multiple GraphQL API Response Data
4. Inserting Multiple Attachments into an AirTable Table
5. Form Repeat - Merging Control Values of Each Repeat Section into a Single JSON
6. Form Repeat - Inserting Each Repeat Section into a Database Using Iteration

## Bulk Insert Records into a Database

This use case explores inserting multiple records into your SQL database. We'll work with Supabase, a PostgreSQL database.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/bulk-insert-query.png" alt="Supabase PostgreSQL Query to insert data" />
  <figcaption align = "center"><i>Supabase PostgreSQL Query to insert data</i></figcaption>
</figure>


The app includes only two controls: a table grid containing records to be inserted into the database table and a button to trigger the insertion process.

To set up the process:

1. Add an Iterate Task action to the `Insert Records` button's click action.
2. Select a table grid column as input for the Iterate Task, e.g., the ID column.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/iterate-task1.png" alt="Iterate Task action block" />
  <figcaption align = "center"><i>Iterate Task action block</i></figcaption>
</figure>

Inside the Iterate Task block:

1. Add a JS Code Block.
2. Create an index variable to store the index value returned by the Iterate Task.
3. Create variables for each table grid column.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/js-code1.png" alt="JS Code action block" />
  <figcaption align = "center"><i>JS Code action block</i></figcaption>
</figure>

```javascript
index = index - 1;
output = {
  ID: ids[index],
  FirstName: firstnames[index],
  LastName: lastnames[index],
  Address: addresses[index],
  Email: emails[index],
  Designation: designations[index]
};
```

Continue to create variables for each table grid column.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/variables1.png" alt="Creating output variables" />
  <figcaption align = "center"><i>Creating output variables</i></figcaption>
</figure>

Add the PostgreSQL DB Connector you've configured. Select the Insert Query and pass the output variables from the JS Code Block.

You may add toasts for success and error branches of the DB Connector.

Finally, run the app, select rows from the table grid, and click `Insert Records.` Selected records will appear in the Supabase table.

## Bulk Update API Data

This use case demonstrates how to send multiple API requests using Iterate Task. We'll use our API Generator service: https://apigenerator.dronahq.com/

For this scenario, we'll create an app to process refunds for selected users. The app consists of a table grid displaying user data, a dropdown with refund reasons, and a `Process Refund` button.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/refund-app.png" alt="Refund App" />
  <figcaption align = "center"><i>Refund App</i></figcaption>
</figure>

To set up the process:

1. Add an Iterate Task action to the `Process Refund` button's click action.
2. Select a table grid column as input for the Iterate Task, e.g., the `CustomerID` column.

Inside the Iterate Task block:

1. Add a JS Code Block.
2. Create an index variable to store the Iterate Task's index value.
3. Create a variable to store the id column from the table grid.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/js-code2.png" alt="JS Code action block" />
  <figcaption align = "center"><i>JS Code action block</i></figcaption>
</figure>

```javascript
output = ids[index-1];
```

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/variables2.png" alt="Creating output variables" />
  <figcaption align = "center"><i>Creating output variables</i></figcaption>
</figure>



After the Iterate Task block, add the reset control data action and select the table grid control.

Add the REST API Connector you've configured and select the PATCH request to update the refund status of the user. Pass the appropriate values to the connector's fields.

You may add toasts for success and error branches of the REST API Connector.

Finally, run the app, select rows from the table grid, choose the refund reason, and click `Process Refund.`

## Merging Multiple GraphQL API Responses Data

This use case discusses querying data from multiple GraphQL APIs and merging those responses into one. We'll use our API Generator service: https://apigenerator.dronahq.com/

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/get-data-query.png" alt="Get Data query" />
  <figcaption align = "center"><i>Get Data query</i></figcaption>
</figure>

For this scenario, we'll create an app with a table grid to display merged GraphQL API responses, a multi-select dropdown with different GraphQL API IDs, and a `Display Data` button.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/multiple-graphql-app.png" alt="Multiple GraphQL API App" />
  <figcaption align = "center"><i>Multiple GraphQL API App</i></figcaption>
</figure>

To set up the process:

1. Add an Iterate Task action to the `Display Data` button's click action.
2. Select the dropdown as input for the Iterate Task, e.g., `graphqlids`.

Add the GraphQL Connector you've configured and pass the Iterate Task's value as input to the id field.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/graphql-block.png" alt="Multiple GraphQL API App" />
</figure>

Inside the Iterate Task block:

1. Add a JS Code Block.
2. Create a variable to store the API's response.

```javascript
const resValueArr = [];
for(let [itrKey, itrValue] of Object.entries(data)) {
  for(let [resKey, resValue] of Object.entries(itrValue)) {
    resValueArr.push(...resValue);
  }
}
output = resValueArr;
```

After the Iterate Task block, add a JS Code Block outside and create a variable to store the combined API responses.

Finally, set the combined responses to the table grid control.

Run the app, select the GraphQL IDs to load data from, and click `Display Data.`

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/app1.png" alt="Multiple GraphQL API App" />
</figure>


## Inserting Multiple Attachments into the AirTable Table

This use case demonstrates inserting multiple attachments into an Airtable table. Ensure you have set up your [Airtable Connector](../reference/connectors/airtable) in DronaHQ Studio.

For this scenario, we have a table with two fields: Email and Attachments.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/bulk-attachment-upload-app.png" alt="Bulk Attachment Upload app" />
  <figcaption align = "center"><i>Bulk Attachment Upload app</i></figcaption>
</figure>


Inside the DronaHQ, we have a textfield for email input, a file upload control for attachment images, and an `Insert Record` button.

To set up the process:

1. Add an Iterate Task action to the `Insert Record` button's click action.
2. Select the file upload control as input for the Iterate Task, e.g., attachments.

Inside the Iterate Task block:

1. Add a JS Code Block.
2. Create a variable to store the Iterate Task's value.

```javascript
output = {
  "url": imgURL
}
```

After the Iterate Task block, add a JS Code Block outside and create a variable to store the image URLs.

Add a JS Code block outside the Iterate Task block, create one variable images which will point to the previous JS Code Block’s output.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/variables3.png" alt="Creating output variables" />
</figure>

```javascript
const imgArray = [];
for(let [key, value] of Object.entries(images)) {
  imgArray.push(value);
}
output = imgArray
```
Now create a variable which will store the JS Code’s output, in our case it is attachments.

Add the Airtable Connector and select the `Create Row` option. Bind the Email field with the Email textfield and the Attachments field with the JS Code Block output.

You may add toasts for success and error branches of the Airtable Connector.

Run the app, enter the email and upload images using the file upload control, and click `Insert Record.`

## Form Repeat - Merge Control Values of Each Repeat Section into a Single JSON

This article explains fetching values from controls inside a Form Repeat container, creating JSON data, and inserting that data into a Supabase (PostgreSQL) table.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/insert-record-postgre.png" alt="PostgreSQL Insert query" />
  <figcaption align = "center"><i>PostgreSQL Insert query</i></figcaption>
</figure>

For this use case, we have taken one textfield for email, one form repeat control which contains 2 textfields `Expense Details” and `Amount” and one `Submit” button.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/app2.png" alt="PostgreSQL Insert query" />
</figure>


To set up the process:

1. Add an Iterate Task action to the `Submit` button's click action.
2. Select the Form Repeat control as input for the Iterate Task.

Inside the Iterate Task block:

1. Add a JS Code Block.
2. Create a variable to store the Iterate Task's value.

Code:

```javascript
output = value;

```

After the Iterate Task block, add a JS Code Block outside and create a variable to store the JSON data.


<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/js-code4.png" alt="PostgreSQL Insert query" />
  <figcaption align = "center"><i>PostgreSQL Insert query</i></figcaption>
</figure>

Code:

```javascript
const expense_details = [];
for(let [key, value] of Object.entries(expenseData)) {
  expense_details.push(value);
}
output = expense_details;

```

Now create a variable which will store the JS Code’s output, in our case it is expense_details.

Add the PostgreSQL DB Connector you've configured. Select the Insert Query and bind the Email field with the Email textfield and the Expense_Details field with the JS Code Block output.

You may add toasts for success and error branches of the DB Connector.

Run the app and click `Submit.` Textfields data will appear in the Supabase table.

## Form Repeat - Insert Each Repeat Section into DB Using Iteration

This article discusses fetching values from controls inside the Form Repeat container and inserting those values into a MySQL table.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/app3.png" alt="Form Repeat app" />
  <figcaption align = "center"><i>Form Repeat app</i></figcaption>
</figure>

To set up the process:

1. Add an Iterate Task action to the `Submit` button's click action.
2. Select the Form Repeat control as input for the Iterate Task.

Inside the Iterate Task block:

1. Add a JS Code Block.
2. Create an index variable to store the Iterate Task's index value.
3. Create variables for each textfield.


<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/js-code5.png" alt="JS Code block" />
  <figcaption align = "center"><i>JS Code block</i></figcaption>
</figure>

Code:

```javascript
index = index - 1;
output = {
  name: names[index],
  email: emails[index],
  designation: designations[index]
};
```

After the Iterate Task block, add a JS Code Block outside and create a variable to store a JSON object.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/using-iterate/js-code5.png" alt="JS Code block" />
  <figcaption align = "center"><i>JS Code block</i></figcaption>
</figure>


Please replace `insert_query_image_link_here` and Now add the MySQL DB Connector you have configured then select the Insert Query and pass the JS Code Block output variables here.