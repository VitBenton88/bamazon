# bamazon

### Welcome to bamazon!

Bamazon is a simple storefront app using **MySQL** and **Node.js**.

Let's get started ...

**First** let's load bamazon.js in terminal ...

![Loading bamazon](/images/startBamazon.jpg?raw=true "Loading bamazon")

**At startup** you will be given two options:

* CUSTOMER
* MANAGER

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

**At startup** you will be given four options:

* View Products for Sale
* View Low Inventory
* Add to Inventory
* Add New Product

![Manager Options](/images/managerOptions.jpg?raw=true "Manager Options")

Let's go over what each option does ...

**View Products for Sale**

This option simply displays a table containing the available items for purchase:

![Available Items](/images/availableItems.jpg?raw=true "Available Items")

The headers of the table are as follows:

1. Product's ID
1. Product's Name
1. Product's Department
1. Product's Price
1. Product's Quantity

**View Low Inventory**

If selected, this option will generate a table containing all items with a quantity of 5 or lower:

![Low Quantity Items](/images/lowQuantityItems.jpg?raw=true "Low Quantity Items")

The headers of the table are as follows:

1. Product's ID
1. Product's Name
1. Product's Department
1. Product's Price
1. Product's Quantity

**Add to Inventory**

The 'Add to Inventory' option allows the user to update the qunatity of an item in the database of products.

After selecting this option, a table containing the available items for purchase will display and you will be prompted for the **Product ID** of the product you would like to update the quantity of: 

![Update Quantity](/images/updateQuantity.jpg?raw=true "Update Quantity")

After submitting a Product ID, you will be prompted for the new quantity of the selected item.

*Remember, the number you are providing is the **new qunaitiy**, it will not be added to the existing quanitiy.* 

After submitting the new quantity, a confirmation will appear and an updated table displaying the available items for purchase will display. *This table will contain the updated quantity.*

**Add New Product**

The 'Add New Product' option allows the user to add a new item to the database of products.

After selecting this option, a table containing the available items for purchase will display.

Below this table a series of prompts will follow. Be prepared to provide the following:

1. The New Product's Name
1. The New Product's Department
1. The New Product's Price
1. The New Product's Quantity

![Prompts When Adding New Product](/images/newItemPrompts.jpg?raw=true "Prompts When Adding New Product")

After answering each prompt, a confirmation will appear and an updated table displaying the available items for purchase will display. *This table will contain the newly added item.*

![New Product Add Completion](/images/newItemAdded.jpg?raw=true "New Product Add Completion")

### This Completes the Submission Guide for my Bamazon App!