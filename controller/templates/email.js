
  const templateEmail = (
    recipientName,
  ) => {
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Complete - test</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
            }
            .header {
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                text-align: center;
            }
            .logo {
                max-width: 150px;
                height: auto;
                margin-bottom: 10px;
            }
            .content {
                background-color: white;
                padding: 30px;
                margin: 20px auto;
                max-width: 600px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .content h2 {
                color: #333;
            }
            .content p {
                color: #555;
                line-height: 1.6;
            }
            .order-details {
                background-color: #f8f8f8;
                padding: 15px;
                border-radius: 8px;
                margin-top: 20px;
            }
            .order-details li {
                list-style: none;
                padding: 8px 0;
                border-bottom: 1px solid #ddd;
            }
            .order-details li:last-child {
                border-bottom: none;
            }
            .button {
                display: inline-block;
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
            }
            .footer {
                background-color: #333;
                color: white;
                padding: 10px;
                text-align: center;
                font-size: 12px;
            }
            .white{
                color: white
            }
        </style>
    </head>
    <body>
        <div class="header">
            test
            <h1>Thank You for Your Order!</h1>
        </div>
        <div class="content">
            <h2>Congratulations, ${recipientName}!</h2>
            <p>Your order has been successfully placed. We are thrilled to have you as a customer and are working hard to ensure your order reaches you soon.</p>
            <div class="order-details">
                <h3>Your Order Details:</h3>
               links
            </div>
            <p>You can track your order status and view more details by clicking the button below:</p>
        </div>
        <div class="footer">
            <p>Thank you for shopping with test. We hope to see you again soon!</p>
            <p class="white">test | test | test</p>
        </div>
    </body>
    </html>`;
  };
  
  export default templateEmail;
  