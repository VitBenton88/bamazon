# bamazon

### Welcome to bamazon!

Bamazon is a simple storefront app using **MySQL** and **Node.js**.

Let's get started ...

**First** let's load bamazon.js in terminal ...

![Loading bamazon](/images/startBamazon.jpg?raw=true "Loading bamazon")

**At startup** you will be given two options, 'CUSTOMER' & 'MANAGER' ...

![Customer or Manager](/images/custORman.jpg?raw=true "Customer or Manager")

First we'll go over the Bamazon Customer App ...

### Bamazon Customer App

Upon loading the Bamazon Customer App, you will be greeted with a table displaying the available items for purchase:

![Available Items](/images/availableItems.jpg?raw=true "Available Items")

The headers of the table are as follows:

1. Product's ID
1. Product's Name
1. Product's Department
1. Product's Price
1. Product's Quantity

Below the graph you will receive your first prompt, which asks for the numeric **Product ID** of the item you would like to purchase ...

![Product ID Prompt](/images/idPrompt.jpg?raw=true "Product ID Prompt")

After entering a product ID, you will be asked to enter a quatity ...

![Quantity Prompt](/images/quantPrompt.jpg?raw=true "Quantity Prompt")

Once a quantity is selected, your order will be processed, a message will appear thanking you for your order, and a **receipt** will be generated. 

The receipt consists of a **unique receipt ID** and the name, price, quantity and total of the item that was purchased:

![Receipt Example](/images/receiptExample.jpg?raw=true "Receipt Example")

Under the receipt an updated table displaying the available items for purchase will display:

![Updated Table](/images/updatedTable.jpg?raw=true "Updated Table")

At this point you will return to the beginning of the Bamazon Customer App.

Now let's go over the Bamazon Manager App ...

### Bamazon Manager App
