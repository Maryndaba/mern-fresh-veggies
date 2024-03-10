<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client connect platform for fruit farmers</title>
    <script src="2main.js" defer></script>
    <link rel="stylesheet" href="style.css">
        <body>
        <div class="background image">
        </div>
        <header>
          <div class="container">
          <h1>Place your fruit order</h1>
          <form action="#">
              <label for="Fruit">select Fruit:</label>
              <select id="fruit"name="fruit">
                  <option value="Apple">Apple</option>
                  <option value="Banana">Banana</option>
                  <option value="watermelon">watermelon</option>
                  <option value="Grape">Grape</option>
              </select>
              <label for="quantity">quantity(kg):</label>
              <input type="text" id="quantity" name="quantity" placeholder="Enter quantity">
              <label for ="delivery">Delivery Address:</label>
              <input type="text" id="delivery" name="delivery"placeholder="Enter delivery address">
              <input type="Submit"value="place Order">
          </form>
          </div>
          </header>
          </body>
      </html>